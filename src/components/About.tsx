import { Award, Leaf, UserRound, Wind, type LucideIcon } from 'lucide-react';

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Award,
    title: 'Experienced Stylists',
    text: 'A team of senior stylists and colourists with years of editorial and salon experience.',
  },
  {
    icon: Leaf,
    title: 'Premium Products',
    text: 'Only professional, salon-grade and ammonia-free products touch your hair and skin.',
  },
  {
    icon: UserRound,
    title: 'Personalized Service',
    text: 'Every appointment begins with a consultation tailored to you — not a template.',
  },
  {
    icon: Wind,
    title: 'Relaxing Experience',
    text: 'A calm, unhurried atmosphere designed to make self-care feel like a true escape.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-100 py-24 lg:py-32">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src="https://images.pexels.com/photos/7750114/pexels-photo-7750114.jpeg?auto=compress&cs=tinysrgb&w=1100"
                alt="Interior of an elegant modern beauty salon with sleek design and luxurious seating"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink-900/10" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-cream-300 bg-cream-50 p-5 shadow-card sm:block lg:-right-8">
              <p className="font-serif text-3xl text-gold-600">12+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink-700/70">
                Years of Artistry
              </p>
            </div>
            <span className="absolute -left-5 -top-5 -z-10 h-32 w-32 rounded-full bg-gold-400/15" />
          </div>

          {/* Text */}
          <div className="reveal">
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              About Lumière
            </span>
            <h2 className="section-title mt-5">Beauty That Feels Personal</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-700/85">
              At Lumière Beauty Studio, beauty is never one-size-fits-all. We focus on
              personalized experiences that begin with listening — to your style, your
              hair, your skin and your story. Our professional stylists combine
              technical mastery with premium products and genuine attention to
              detail, so every visit leaves you feeling cared for and confident.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-700/85">
              From a quick refresh to your bridal day, we create looks that are
              effortless, modern and unmistakably yours.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-300">
                    <h.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-serif text-base text-ink-900">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700/75">
                      {h.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
