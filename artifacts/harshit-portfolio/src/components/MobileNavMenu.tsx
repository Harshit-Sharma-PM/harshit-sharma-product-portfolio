import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="mobile-nav-menu">
      <button
        className="mobile-nav-trigger"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>

      {open && (
        <div className="mobile-nav-panel" id="mobile-navigation">
          <div className="mobile-nav-links">
            <a href="/#about" onClick={closeMenu}>About</a>
            <a href="/#case-studies" onClick={closeMenu}>Case studies</a>
            <a href="/#ask-harshit" onClick={(event) => { event.preventDefault(); closeMenu(); window.dispatchEvent(new CustomEvent("open-ask-harshit")); }}>Ask Harshit AI</a>
            <a
              href="https://www.linkedin.com/in/harshit-sharma-bb5a61286"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mobile-nav-theme">
            <span>Appearance</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
