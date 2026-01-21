'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'এই পোর্টফোলিও ওয়েবসাইটটি - Next.js, Tailwind CSS, Framer Motion দিয়ে তৈরি।',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Task Management App',
    description: 'রিয়েল-টাইম টাস্ক ম্যানেজমেন্ট অ্যাপ যা সিঙ্ক করা ডেটা এবং সুন্দর UI এর সাথে আসে।',
    tags: ['React', 'MongoDB', 'Node.js', 'Socket.io'],
  },
  {
    name: 'E-commerce Platform',
    description: 'সম্পূর্ণ ই-কমার্স প্ল্যাটফর্ম যা পেমেন্ট গেটওয়ে, অর্ডার ট্র্যাকিং সহ।',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redux'],
  },
  {
    name: 'Chat Application',
    description: 'রিয়েল-টাইম চ্যাট অ্যাপ্লিকেশন যা তাৎক্ষণিক মেসেজিং এবং ফাইল শেয়ারিং সাপোর্ট করে।',
    tags: ['React', 'Firebase', 'WebSocket', 'Express'],
  },
  {
    name: 'Analytics Dashboard',
    description: 'ডেটা ভিজুয়ালাইজেশন এবং রিয়েল-টাইম এনালিটিক্স দেখানোর জন্য ড্যাশবোর্ড।',
    tags: ['Next.js', 'Recharts', 'PostgreSQL', 'API'],
  },
  {
    name: 'Weather Application',
    description: 'সুন্দর ইউজার ইন্টারফেস সহ আবহাওয়া অ্যাপ্লিকেশন যা রিয়েল-টাইম ডেটা দেখায়।',
    tags: ['React', 'Weather API', 'Geolocation', 'CSS'],
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            আমার প্রজেক্ট
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/40" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)',
              }}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-accent/60 transition-all duration-300 overflow-hidden"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.name}</h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/30 rounded-full group-hover:border-accent/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 rounded-xl transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
