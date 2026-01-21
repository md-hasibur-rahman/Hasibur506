'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
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
            আমার সম্পর্কে
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/40" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              আমি একজন তরুণ ডেভেলপার যে কোড এবং ডিজাইনের সংমিশ্রণে বিশ্বাস করি। প্রতিটি প্রজেক্টে
              আমি ব্যবহারকারী অভিজ্ঞতা এবং পারফরম্যান্সকে সর্বোচ্চ অগ্রাধিকার দিই।
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              আমার ফোকাস হল এমন ওয়েবসাইট তৈরি করা যা দ্রুত, মিনিমাল এবং নির্ভরযোগ্য। আমি প্রযুক্তি
              ব্যবহার করে মানুষের জীবন সহজ করতে আগ্রহী।
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              যখন কোডিং করছি না, তখন আমি গেমিং, নতুন প্রযুক্তি শিখা, অথবা ডিজিটাল ডিজাইন নিয়ে
              এক্সপেরিমেন্ট করে সময় কাটাই।
            </p>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow effect background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl blur-xl" />
              
              {/* Image container */}
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative w-full rounded-3xl border border-accent/30 shadow-xl"
              />
              
              {/* Accent border glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.2)',
                    '0 0 40px rgba(0, 212, 255, 0.4)',
                    '0 0 20px rgba(0, 212, 255, 0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 rounded-3xl pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
