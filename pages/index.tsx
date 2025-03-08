import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "Lo-Fi Player",
      description: "Interactive music experience",
      link: "#",
      tags: ["MIT Tech Review", "The Verge", "engadget"]
    },
    {
      title: "YouTube Sampler",
      description: "Create music with YouTube videos",
      link: "#",
      tags: ["ml5.js"]
    },
    // Add more projects...
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Head>
        <title>Your Name - Creative Developer</title>
        <meta name="description" content="Personal portfolio and projects" />
      </Head>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-3xl mb-4">👋 Hi, I'm [Your Name].</h1>
        <p className="text-xl text-gray-700">
          🎸 I make [your specialty] easier to [action], e.g. Project A and Project B.
        </p>
        <p className="mt-4 text-gray-600">
          ☕️ Find me on{' '}
          <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">github</a>,{' '}
          <a href="https://twitter.com/yourusername" className="text-blue-600 hover:underline">twitter</a>, and{' '}
          <a href="https://linkedin.com/in/yourusername" className="text-blue-600 hover:underline">linkedin</a>.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <a href={project.link} className="block p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-2">{project.description}</p>
              {project.tags && (
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-sm text-gray-500">[{tag}]</span>
                  ))}
                </div>
              )}
            </a>
          </motion.div>
        ))}
      </section>
    </div>
  );
} 