import { Phone, Mail, Clock, MapPin, Navigation, Instagram, Facebook, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 018-2245',
    href: 'tel:+15550182245',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@lumierebeauty.demo',
    href: 'mailto:hello@lumierebeauty.demo',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Mon – Sat · 10:00 AM – 8:00 PM',
    sub: 'Sunday · By appointment',
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-100 py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Contact
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="section-title mt-5">Visit Our Studio</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700/80">
            We would love to welcome you. Reach out with any question, or drop by
            our demo location to say hello.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Info card */}
          <div className="reveal flex flex-col justify-between rounded-3xl border border-cream-300/70 bg-cream-50 p-8 shadow-soft sm:p-10">
            <div>
              <ul className="space-y-7">
                {contactInfo.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-300">
                      <c.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 block font-serif text-lg text-ink-900 transition-colors hover:text-gold-600"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-serif text-lg text-ink-900">{c.value}</p>
                      )}
                      {c.sub && (
                        <p className="mt-1 text-sm text-ink-700/70">{c.sub}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-300">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                    Location
                  </p>
                  <p className="mt-1 font-serif text-lg text-ink-900">
                    24 Rosewood Avenue, Belleview Square
                  </p>
                  <p className="text-sm text-ink-700/70">Demo City · 00000</p>
                  <p className="mt-2 text-xs italic text-ink-700/50">
                    Demo address — for presentation only
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-cream-300/70 pt-7">
              <a
                href="https://www.google.com/maps?q=24+Rosewood+Avenue+Belleview+Square"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-800 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="reveal overflow-hidden rounded-3xl border border-cream-300/70 shadow-soft">
            <iframe
              title="Lumière Beauty Studio demo location map"
              src="https://www.google.com/maps?q=24+Rosewood+Avenue&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
