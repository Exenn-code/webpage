import { Layout } from './components/layout/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/about/AboutSection';
import { Contact } from './components/Contact';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useParallax } from './hooks/useParallax';

export default function App() {
  useIntersectionObserver();
  useSmoothScroll();
  useParallax();

  return (
    <Layout>
      <Hero />
      <Services />
      <HowItWorks />
      <AboutSection />
      <Contact />
    </Layout>
  );
}