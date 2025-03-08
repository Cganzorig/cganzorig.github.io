import { motion } from 'framer-motion';

export default function FitnessJourney() {
  return (
    <section id="fitness" className="py-20 bg-softGrey text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Fitness Journey</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg"
        >
          Interactive timeline or infographic showcasing milestones (rowing time, deadlift and bench press PRs, half marathon, ATB climb).
        </motion.div>
      </div>
    </section>
  );
} 