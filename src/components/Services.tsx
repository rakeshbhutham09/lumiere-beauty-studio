import { ArrowRight } from 'lucide-react';
import { services } from '@/data/content';
import {
  Scissors,
  Palette,
  Sparkles,
  Flower2,
  Heart,
  Hand,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Palette,
  Sparkles,
  Flower2,
  Heart,
  Hand,
};

export default function Services({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="services" className="bg-cream-100 py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Our Services
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="section-title mt-5">Crafted Care for Every Detail</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700/80">
            A complete menu of hair, beauty and wellness services — each delivered
            with premium products and a personalised, unhurried approach.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <article
                key={service.id}
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-cream-300/70 bg-cream-50 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-card"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Decorative corner accent */}
                <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-400/10 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-gold-300 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <h3 className="relative mt-6 font-serif text-xl text-ink-900">
                  {service.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-700/80">
                  {service.description}
                </p>

                <button
                  onClick={() => scrollTo('appointment')}
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
