export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
          <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </section>
  );
} 