import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import FitnessJourney from '../components/FitnessJourney';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ganzorig Chuluunbat</title>
        <meta name="description" content="Personal website of Ganzorig Chuluunbat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <FitnessJourney />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}