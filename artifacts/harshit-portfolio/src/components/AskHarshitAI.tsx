import { useMemo, useState, type ReactNode } from "react";
import { Bot, Send, Sparkles, UserRound } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{ title: string; section?: string }>;
};

function renderInlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(/(\\*\\*[^*]+\\*\\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

function renderMarkdown(text: string) {
  const lines = text.split(/\\r?\\n/);
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

    const bullet = trimmed.match(/^[-*]\\s+(.+)$/);
    if (bullet) {
      bullets.push(bullet[1]);
      return;
    }

    flushBullets();

    const heading = trimmed.match(/^#{1,3}\\s+(.+)$/);
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

const starterQuestions = [
  "What kind of Product Manager am I?",
  "Tell me about my Saarthi AI case study.",
  "What product areas have I worked on?",
];

export function AskHarshitAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m Ask Harshit AI. Ask me about Harshit’s product work, case studies, skills, or experience. I’ll use the portfolio knowledge base and cite the relevant source.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

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
        body: JSON.stringify({ question }),
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
    <section id="ask-harshit" className="ask-ai-section">
      <div className="wrap grid2 ask-ai-grid">
        <aside className="side">
          <div className="num">Ask Harshit</div>
          <p>Explore the portfolio through a grounded AI assistant.</p>
        </aside>

        <div className="ask-ai-shell">
          <div className="ask-ai-heading">
            <div>
              <div className="eyebrow"><Sparkles size={14} /> Portfolio RAG assistant</div>
              <h2>Ask Harshit AI</h2>
              <p className="lead">
                Ask questions about my work, product thinking, case studies, and skills.
              </p>
            </div>
            <div className="ask-ai-badge"><Bot size={16} /> RAG</div>
          </div>

          <div className="ask-ai-starters" aria-label="Suggested questions">
            {starterQuestions.map((question) => (
              <button key={question} type="button" onClick={() => void sendMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          <div className="ask-ai-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={`ask-ai-message ${message.role}`}>
                <div className="ask-ai-avatar">
                  {message.role === "assistant" ? <Bot size={16} /> : <UserRound size={16} />}
                </div>
                <div className="ask-ai-bubble">
                  <p>{message.content}</p>
                  {message.sources?.length ? (
                    <div className="ask-ai-sources">
                      {message.sources.map((source, sourceIndex) => (
                        <span key={sourceIndex}>
                          Source: {source.title}{source.section ? ` · ${source.section}` : ""}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            {loading ? (
              <div className="ask-ai-message assistant">
                <div className="ask-ai-avatar"><Bot size={16} /></div>
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

          <p className="ask-ai-disclaimer">
            Answers are grounded in portfolio content. The assistant should acknowledge when
            the knowledge base does not contain enough evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
