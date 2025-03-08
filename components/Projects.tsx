import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p className="text-darkGrey">Short description of the project.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 