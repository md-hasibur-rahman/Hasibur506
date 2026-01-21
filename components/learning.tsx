'use client';

import { motion } from 'framer-motion';

const learning = [
  {
    phase: 'বর্তমানে শিখছি',
    items: [
      'Advanced TypeScript Patterns',
      'System Design Architecture',
      'Web Performance Optimization',
      'Cloud Deployment (AWS/Vercel)',
    ],
    color: 'from-accent to-accent/60',
  },
  {
    phase: 'পরবর্তী লক্ষ্য',
    items: [
      'Machine Learning বেসিক্স',
      'GraphQL এবং Advanced API Design',
      'Real-time Applications (WebSocket)',
      'Blockchain & Web3 Development',
    ],
    color: 'from-purple-500 to-purple-500/60',
  },
  {
    phase: 'আগামী প্রজেক্ট',
    items: [
      'AI-powered Developer Tool তৈরি করা',
      'Open Source Contribution বাড়ানো',
      'Technical Blog শুরু করা',
      'Community-driven Product তৈরি করা',
    ],
    color: 'from-green-500 to-green-500/60',
  },
];

export function Learning() {
  return (
    <section id="learning" className="min-h-screen flex items-center justify-center py-20">
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
            শেখা ও বৃদ্ধি
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/40" />
        </motion.div>

        {/* Learning Roadmap */}
        <div className="space-y-8">
          {learning.map((phase, phaseIndex) => (
            <motion.div
              key={phaseIndex}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Phase Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {phaseIndex + 1}
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-16">
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/40 transition-colors duration-300"
                  >
                    <span className="text-accent mt-1 text-lg">→</span>
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Timeline connector */}
              {phaseIndex < learning.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-accent to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Inspiration Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent/10 to-transparent border border-accent/20"
        >
          <p className="text-lg text-foreground italic text-center">
            "প্রতিদিন শেখা এবং বৃদ্ধি পাওয়ার মাধ্যমে, আমি আরও ভাল ডেভেলপার হতে পারি।"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
