import React from 'react';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Support and Resources
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find contact information for anti-ragging committees, helpline numbers, counseling services, and downloadable resources.
        </motion.p>
      </header>

      <section className="mb-12 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Information
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reach out to the following anti-ragging committees and counseling services for assistance.
        </motion.p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-red-500">Anti-Ragging Committees</h3>
          <ul className="list-disc pl-5 mb-6">
            <li>
              <span className="font-semibold">National Helpline:</span> 
              <a 
                href="tel:+1800123456" 
                className="text-red-500 hover:underline"
              >
                +1-800-123-456
              </a>
            </li>
            <li>
              <span className="font-semibold">Local Committee:</span> 
              <a 
                href="tel:+919876543210" 
                className="text-red-500 hover:underline"
              >
                +91-987-654-3210
              </a>
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 text-red-500">Counseling Services</h3>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-semibold">University Counseling Center:</span> 
              <a 
                href="tel:+1122334455" 
                className="text-red-500 hover:underline"
              >
                +1-123-456-7890
              </a>
            </li>
            <li>
              <span className="font-semibold">Local Mental Health Support:</span> 
              <a 
                href="tel:+10987654321" 
                className="text-red-500 hover:underline"
              >
                +1-098-765-4321
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Downloadable Resources
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Access important forms and resources related to anti-ragging measures.
        </motion.p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul className="list-disc pl-5">
            <li>
              <a 
                href="https://example.com/anti-ragging-pledge.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-500 hover:underline"
              >
                Download Anti-Ragging Pledge Form
              </a>
            </li>
            <li>
              <a 
                href="https://example.com/complaint-form.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-500 hover:underline"
              >
                Download Complaint Form
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Support;
