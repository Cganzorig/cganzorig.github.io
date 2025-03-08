export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p className="text-gray-700">Short description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 