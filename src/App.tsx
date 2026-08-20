import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Transformations from '@/components/Transformations';
import About from '@/components/About';
import Offers from '@/components/Offers';
import Testimonials from '@/components/Testimonials';
import Appointment from '@/components/Appointment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal, useScrollTo } from '@/hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  const { scrollTo } = useScrollTo();

  return (
    <div className="min-h-screen bg-cream-100">
      <Header scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <Services scrollTo={scrollTo} />
        <Transformations />
        <About />
        <Offers scrollTo={scrollTo} />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
