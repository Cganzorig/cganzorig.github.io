import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-softGrey text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg"
        >
          Hello! I'm Ganzorig Chuluunbat, a passionate AI enthusiast exploring the realms of machine learning, deep learning, and artificial intelligence. My work reflects my continuous learning and experiments in this exciting field.
        </motion.div>
      </div>
    </section>
  );
} 