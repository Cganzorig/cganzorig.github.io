import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-softGrey text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            autocomplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            autocomplete="email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            autocomplete="off"
          ></textarea>
          <button
            type="submit"
            className="bg-coral hover:bg-teal text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
} 