import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section id="blog" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg"
        >
          Regular updates or posts about machine learning, fitness, research activities.
        </motion.div>
      </div>
    </section>
  );
} 