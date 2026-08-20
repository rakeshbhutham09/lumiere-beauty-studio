import { CalendarHeart, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2263142/pexels-photo-2263142.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Woman admiring her reflection in a well-lit salon vanity mirror"
          className="h-full w-full object-cover object-center animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/55 to-ink-900/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-ink-900/30" />
      </div>

      {/* Content */}
      <div className="container-page relative flex min-h-screen items-center pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="eyebrow animate-fade-in text-gold-300">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Beauty Salon
          </span>

          <h1
            className="mt-6 font-serif text-5xl leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="animate-fade-up block">Reveal Your</span>
            <span className="animate-fade-up block italic text-gold-300" style={{ animationDelay: '0.18s' }}>
              Beauty
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-cream-100/90 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Professional hair, beauty and self-care services designed to bring out
            your best.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.42s' }}
          >
            <button onClick={() => scrollTo('appointment')} className="btn-gold">
              <CalendarHeart className="h-4 w-4" />
              Book an Appointment
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/40 bg-cream-50/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-cream-50/10 hover:text-gold-300"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Trust indicator */}
          <div
            className="mt-12 flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <span className="h-px w-10 bg-gold-400/60" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream-100/80">
              Hair • Beauty • Makeup • Wellness
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream-100/70">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream-50/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold-300" />
        </span>
      </div>
    </section>
  );
}
