import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-100 py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Testimonials
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="section-title mt-5">Loved by Our Clients</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700/80">
            A few words from the women who trust us with their hair, skin and
            special moments. <span className="font-semibold text-gold-700">Demo testimonials</span> for presentation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <article
              key={t.id}
              className="reveal relative flex flex-col rounded-3xl border border-cream-300/70 bg-cream-50 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <Quote className="h-9 w-9 text-gold-400/60" fill="currentColor" aria-hidden="true" />

              <div className="mt-4 flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating ? 'text-gold-500' : 'text-cream-400'
                    }`}
                    fill={i < t.rating ? 'currentColor' : 'none'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-base leading-relaxed text-ink-800/85">
                “{t.quote}”
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-cream-300/70 pt-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-serif text-sm text-gold-300">
                  {t.initials}
                </span>
                <div>
                  <p className="font-serif text-base text-ink-900">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold-600">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
