import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function CaseStudyNavMenu() {
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
    <div className="mobile-nav-menu case-study-mobile-nav">
      <button
        className="mobile-nav-trigger"
        type="button"
        aria-label={open ? 'Close case study navigation' : 'Open case study navigation'}
        aria-expanded={open}
        aria-controls="case-study-mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>

      {open && (
        <div className="mobile-nav-panel" id="case-study-mobile-navigation">
          <div className="mobile-nav-links">
            <a href="/" onClick={closeMenu}>All work</a>
            <a href="#problem" onClick={closeMenu}>Problem</a>
            <a href="#discovery" onClick={closeMenu}>Discovery</a>
            <a href="#strategy" onClick={closeMenu}>Strategy</a>
            <a href="#mvp" onClick={closeMenu}>MVP</a>
            <a href="#ai" onClick={closeMenu}>AI architecture</a>
            <a href="#gtm" onClick={closeMenu}>GTM</a>
            <a href="#reflection" onClick={closeMenu}>Reflection</a>
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
