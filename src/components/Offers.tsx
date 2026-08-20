import { Tag, ArrowRight } from 'lucide-react';
import { offers } from '@/data/content';

export default function Offers({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="offers" className="relative overflow-hidden bg-cream-200 py-24 lg:py-32">
      {/* Soft decorative blobs */}
      <span className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold-300/15 blur-3xl" />

      <div className="container-page relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Special Offers
            <span className="h-px w-8 bg-gold-400" />
          </span>
          <h2 className="section-title mt-5">Your Beauty, Your Moment</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700/80">
            A few curated packages to help you treat yourself — or someone you love.
            These are <strong className="font-semibold text-gold-700">demo offers</strong> shown
            for presentation purposes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {offers.map((offer, idx) => (
            <article
              key={offer.id}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-cream-300/80 bg-cream-50 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600">
                  <Tag className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="rounded-full bg-ink-900/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-700/70">
                  {offer.badge}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-xl text-ink-900">{offer.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700/80">
                {offer.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-cream-300/70 pt-5">
                <span className="font-serif text-lg text-gold-700">{offer.price}</span>
                <button
                  onClick={() => scrollTo('appointment')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600"
                >
                  Reserve
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-xs uppercase tracking-[0.2em] text-ink-700/50">
          Demo content — pricing and availability are illustrative only
        </p>
      </div>
    </section>
  );
}
