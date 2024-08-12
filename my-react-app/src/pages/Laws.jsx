import React from 'react';
import { motion } from 'framer-motion';

const Laws = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
      {/* Header Section */}
      <header className="text-center mb-12 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Legal Consequences of Ragging
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore the legal framework and consequences associated with ragging at both national and university levels.
        </motion.p>
      </header>

      {/* National Policies */}
      <section className="mb-12 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          National Policies
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ragging is considered a criminal offense under various national laws. Institutions and legal authorities enforce strict measures to combat and penalize ragging.
        </motion.p>
        <motion.ul
          className="list-disc pl-5 mb-6 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <li>
            <a 
              href="https://example.com/national-law" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-500 underline hover:text-red-400"
            >
              National Anti-Ragging Laws
            </a>
          </li>
          <li>
            <a 
              href="https://example.com/penalties" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-500 underline hover:text-red-400"
            >
              Penalties for Ragging
            </a>
          </li>
        </motion.ul>
      </section>

      {/* University Policies */}
      <section className="mb-12 max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          University-Level Policies
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Universities have specific policies and procedures to address ragging. These include disciplinary actions and support systems for affected students.
        </motion.p>
        <motion.ul
          className="list-disc pl-5 mb-6 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <li>
            <a 
              href="https://example.com/university-policy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-500 underline hover:text-red-400"
            >
              University Anti-Ragging Policy
            </a>
          </li>
          <li>
            <a 
              href="https://example.com/report" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-500 underline hover:text-red-400"
            >
              Reporting Procedures
            </a>
          </li>
        </motion.ul>
      </section>

      {/* Call to Action */}
     
    </div>
  );
};

export default Laws;
