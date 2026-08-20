import { useEffect, useState } from 'react';
import { Menu, X, CalendarHeart } from 'lucide-react';
import { useScrolled, useScrollTo } from '@/hooks/useScrollReveal';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'transformations', label: 'Transformations' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ scrollTo }: { scrollTo: (id: string) => void }) {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const { headerRef } = useScrollTo();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Lumière Beauty Studio home"
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
              scrolled
                ? 'border-gold-500/40 bg-ink-900'
                : 'border-white/30 bg-ink-900/80'
            }`}
          >
            <span className="font-serif text-lg italic text-gold-400">L</span>
          </span>
          <span className="flex flex-col items-start leading-none">
            <span
              className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-ink-900' : 'text-cream-50'
              }`}
            >
              Lumière
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}
            >
              Beauty Studio
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? 'text-ink-700 hover:text-gold-600'
                  : 'text-cream-50/90 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button onClick={() => handleNav('appointment')} className="btn-gold">
            <CalendarHeart className="h-4 w-4" />
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
            scrolled
              ? 'border-ink-900/15 text-ink-900'
              : 'border-white/30 text-cream-50'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-100 lg:hidden ${
          open ? 'max-h-[80vh] border-t border-cream-300/60' : 'max-h-0'
        } transition-[max-height] duration-500 ease-in-out`}
      >
        <nav className="container-page flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="rounded-xl px-4 py-3 text-left text-base font-medium text-ink-800 transition-colors hover:bg-cream-200 hover:text-gold-600"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('appointment')}
            className="btn-gold mt-3 w-full"
          >
            <CalendarHeart className="h-4 w-4" />
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
}
