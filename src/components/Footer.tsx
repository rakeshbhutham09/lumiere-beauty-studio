import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'transformations', label: 'Transformations' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const serviceLinks = [
  'Haircuts & Styling',
  'Hair Colour',
  'Hair Spa & Treatments',
  'Facials & Skincare',
  'Bridal & Party Makeup',
  'Manicure & Pedicure',
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 bg-cream-50/5">
                <span className="font-serif text-lg italic text-gold-300">L</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg text-cream-50">Lumière</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-300">
                  Beauty Studio
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-200/70">
              A premium beauty salon dedicated to personalized hair, beauty and
              self-care — where every visit reveals a more confident you.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-100 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-cream-200/75 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-left text-sm text-cream-200/75 transition-colors hover:text-gold-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cream-200/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span>24 Rosewood Avenue, Belleview Square, Demo City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-300" />
                <a href="tel:+15550182245" className="transition-colors hover:text-gold-300">
                  +1 (555) 018-2245
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-300" />
                <a href="mailto:hello@lumierebeauty.demo" className="transition-colors hover:text-gold-300">
                  hello@lumierebeauty.demo
                </a>
              </li>
            </ul>
            <button
              onClick={() => scrollTo('appointment')}
              className="btn-gold mt-6"
            >
              Book Appointment
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream-200/60">
            © {new Date().getFullYear()} Lumière Beauty Studio. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/50">
            Demo website · Crafted for presentation purposes
          </p>
        </div>
      </div>
    </footer>
  );
}
