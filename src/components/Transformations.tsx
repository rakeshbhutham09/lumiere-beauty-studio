import { transformations } from '@/data/content';

const spanClass: Record<string, string> = {
  tall: 'sm:row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
};

export default function Transformations() {
  return (
    <section id="transformations" className="bg-ink-900 py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-300">
            <span className="h-px w-8 bg-gold-400/70" />
            Transformations
            <span className="h-px w-8 bg-gold-400/70" />
          </span>
          <h2 className="section-title mt-5 text-cream-50">
            Real Looks, Real Confidence
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream-200/75">
            A curated gallery of hair transformations — cuts, colour, styling and
            bridal looks crafted by our team. Hover to explore each story.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {transformations.map((item, idx) => (
            <figure
              key={item.id}
              className={`reveal group relative overflow-hidden rounded-2xl ${spanClass[item.span ?? 'normal']}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">
                  {item.category}
                </span>
                <h3 className="mt-1.5 font-serif text-lg text-cream-50">
                  {item.title}
                </h3>
              </figcaption>

              <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-gold-500/90 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
