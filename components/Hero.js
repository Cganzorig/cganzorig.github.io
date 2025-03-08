import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My World</h2>
        <p className="text-xl mb-8">Explore my journey in AI through my blog posts.</p>
        <a href="#posts" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">View Posts</a>
      </motion.div>
    </section>
  );
} 