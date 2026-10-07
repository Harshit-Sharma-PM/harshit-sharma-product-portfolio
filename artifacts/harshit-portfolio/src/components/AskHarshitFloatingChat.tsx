import "./AskHarshitFloatingChat.css";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Bot, Send, Sparkles, UserRound, X } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{ title: string; section?: string }>;
};

const starterQuestions = [
  "What kind of Product Manager am I?",
  "Tell me about my Saarthi AI case study.",
  "What product areas have I worked on?",
];

function renderInlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

function renderMarkdown(text: string) {
  const lines = text.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    nodes.push(
      <ul key={`list-${nodes.length}`}>
        {bullets.map((item, index) => (
          <li key={index}>{renderInlineMarkdown(item)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushBullets();
      return;
    }

    const bullet = trimmed.match(/^[-*]\s+(.+)$/);
    if (bullet) {
      bullets.push(bullet[1]);
      return;
    }

    flushBullets();

    const heading = trimmed.match(/^#{1,3}\s+(.+)$/);
    if (heading) {
      nodes.push(
        <h4 key={`heading-${index}`}>{renderInlineMarkdown(heading[1])}</h4>,
      );
      return;
    }

    nodes.push(
      <p key={`paragraph-${index}`}>{renderInlineMarkdown(trimmed)}</p>,
    );
  });

  flushBullets();
  return nodes;
}

export function AskHarshitFloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m Ask Harshit AI. Ask me anything about Harshit’s product experience, case studies, skills, or product thinking. I’ll answer from his portfolio and point to the relevant evidence.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  async function sendMessage(prefilled?: string) {
    const question = (prefilled ?? input).trim();
    if (!question || loading) return;

    setInput("");
    setMessages((current) => [...current, { role: "user", content: question }]);
    setLoading(true);

    try {
      const response = await fetch("/api/ask-harshit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          question,
          history: messages
            .slice(-6)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await response.json()) as {
        answer?: string;
        sources?: Array<{ title: string; section?: string }>;
        error?: string;
      };

      if (!response.ok) throw new Error(data.error || "Unable to answer right now.");

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer || "I couldn’t find enough grounded information to answer that.",
          sources: data.sources,
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "The assistant is temporarily unavailable. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open ? (
        <div className="ask-ai-float-overlay" onMouseDown={() => setOpen(false)}>
          <section
            className="ask-ai-float-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ask-harshit-floating-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="ask-ai-float-header">
              <div className="ask-ai-float-title">
                <div className="ask-ai-float-icon"><Bot size={18} /></div>
                <div>
                  <div className="ask-ai-float-eyebrow"><Sparkles size={12} /> Portfolio RAG assistant</div>
                  <h2 id="ask-harshit-floating-title">Ask Harshit AI</h2>
                </div>
              </div>
              <button
                className="ask-ai-float-close"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Ask Harshit AI"
              >
                <X size={18} />
              </button>
            </header>

            <div className="ask-ai-float-starters" aria-label="Suggested questions">
              {starterQuestions.map((question) => (
                <button key={question} type="button" onClick={() => void sendMessage(question)}>
                  {question}
                </button>
              ))}
            </div>

            <div className="ask-ai-float-messages" aria-live="polite">
              {messages.map((message, index) => (
                <div key={index} className={`ask-ai-message ${message.role}`}>
                  <div className="ask-ai-avatar">
                    {message.role === "assistant" ? <Bot size={15} /> : <UserRound size={15} />}
                  </div>
                  <div className="ask-ai-bubble">
                    <div className="ask-ai-content">{renderMarkdown(message.content)}</div>
                    {message.sources?.length ? (
                      <div className="ask-ai-sources">
                        <span className="ask-ai-sources-label">Sources</span>
                        {message.sources.map((source, sourceIndex) => (
                          <span className="ask-ai-source-chip" key={sourceIndex}>{source.title}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              {loading ? (
                <div className="ask-ai-message assistant">
                  <div className="ask-ai-avatar"><Bot size={15} /></div>
                  <div className="ask-ai-bubble"><p>Searching the portfolio knowledge base…</p></div>
                </div>
              ) : null}
            </div>

            <form
              className="ask-ai-input"
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage();
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question about Harshit…"
                aria-label="Ask Harshit AI"
              />
              <button type="submit" disabled={!canSend} aria-label="Send question">
                <Send size={17} />
              </button>
            </form>

            <p className="ask-ai-float-disclaimer">
              Answers use information from Harshit’s portfolio and should acknowledge when evidence is insufficient.
            </p>
          </section>
        </div>
      ) : null}

      {!open ? (
        <button
          className="ask-ai-floating"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Ask Harshit AI"
          title="Ask Harshit AI"
          aria-expanded={open}
        >
          <Bot size={18} aria-hidden="true" />
          <span>Ask Harshit AI</span>
        </button>
      ) : null}
    </>
  );
}
