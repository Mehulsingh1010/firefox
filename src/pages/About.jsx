import React from 'react';
import { motion } from 'framer-motion';

// Sample image URLs; replace with your preferred images
const img1 = 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Ragging+Impact'; 
const img2 = 'https://via.placeholder.com/600x400/33C1FF/FFFFFF?text=Anti-Ragging'; 
const img3 = 'https://via.placeholder.com/600x400/FFC300/FFFFFF?text=Support+Anti-Ragging'; 

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Understanding Ragging
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Learn about ragging, its impact on students, and why it's crucial to prevent it.
        </motion.p>
      </header>

      {/* What is Ragging? */}
      <section className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          What is Ragging?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ragging involves harassment or bullying, often during student initiation. It includes forced activities, verbal abuse, or physical harassment. This practice is illegal in many countries and condemned by educational institutions.
        </motion.p>
       
      </section>

      {/* Impact on Students */}
      <section className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Impact on Students
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The impact of ragging can be severe, leading to mental health issues like anxiety, depression, and PTSD. It affects academic performance and well-being, with extreme cases leading to tragic outcomes.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Studies show over 30% of students who faced ragging reported long-term psychological effects, highlighting the need for strong anti-ragging measures.
        </motion.p>
      </section>

      {/* Importance of Prevention */}
      <section className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Prevent Ragging?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Preventing ragging is crucial for creating a safe and respectful environment. It ensures that students feel valued and protected, fostering a positive learning atmosphere.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Strict anti-ragging policies, awareness programs, and support systems are essential. Together, we can create an environment where students can thrive without fear.
        </motion.p>
      </section>

      {/* Real-Life Stories */}
      <section className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Real-Life Stories
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Many survivors have shared their experiences, highlighting the emotional and psychological toll of ragging. These stories emphasize the importance of preventing and addressing this issue.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          For example, [Name], who experienced ragging, described how it impacted their mental health and academic life. Such stories remind us of the urgent need for proactive measures.
        </motion.p>
     
      </section>

      {/* Call to Action */}
     

      {/* Additional Image */}
      <section className="text-center">
     
      </section>
    </div>
  );
};

export default About;
