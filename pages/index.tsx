import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  tags?: string[];
  link: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "Lo-Fi Player",
      tags: ["MIT Tech Review", "The Verge", "engadget"],
      link: "#"
    },
    {
      title: "かれさんすい 枯山水",
      link: "#"
    },
    {
      title: "YouTube Sampler",
      link: "#"
    },
    {
      title: "Body Beat",
      tags: ["ml5.js"],
      link: "#"
    },
    {
      title: "Whack A Mole",
      tags: ["ml5.js"],
      link: "#"
    },
    {
      title: "Sornting",
      tags: ["magenta"],
      link: "#"
    },
    {
      title: "RUNN",
      tags: ["magenta"],
      link: "#"
    },
    {
      title: "Beact",
      link: "#"
    },
    {
      title: "Digital Cortex",
      link: "#"
    },
    {
      title: "Étude",
      link: "#"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Head>
        <title>Ganzorig Chuluunbat</title>
        <meta name="description" content="Personal website and projects" />
      </Head>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 space-y-4"
      >
        <p className="text-lg">🙌 Hi, I'm Ganzorig Chuluunbat.</p>
        <p className="text-lg">
          🎸 I make AI easier to understand, e.g. Lo-Fi Player and Beact.
        </p>
        <p className="text-lg">
          ☕️ Chilling on{' '}
          <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">github</a>,{' '}
          <a href="https://twitter.com/yourusername" className="text-blue-600 hover:underline">twitter</a>, and{' '}
          <a href="https://medium.com/@yourusername" className="text-blue-600 hover:underline">medium</a>.{' '}
          Flexing on{' '}
          <a href="https://linkedin.com/in/yourusername" className="text-blue-600 hover:underline">linkedin</a>.
        </p>
      </motion.section>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-lg"
      >
        Here are some of my stuffs...
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <div key={project.title} className="group">
            <a href={project.link} className="text-lg hover:text-blue-600 transition-colors">
              * {project.title}{' '}
              {project.tags && project.tags.map(tag => (
                <span key={tag} className="text-gray-500">[{tag}] </span>
              ))}
            </a>
          </div>
        ))}
        <p className="text-lg">more..</p>
      </motion.div>
    </div>
  );
} 