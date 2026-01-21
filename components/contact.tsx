'use client';

import React from "react"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { 
  SiGmail, 
  SiWhatsapp, 
  SiGithub, 
  SiLinkedin,
  SiX,
  SiDiscord,
  SiYoutube,
  SiFacebook,
  SiInstagram
} from 'react-icons/si';

// Initialize EmailJS
emailjs.init('service_pq0e1uf');

const contacts = [
  { label: 'Email', value: 'animeandmanga1810@gmail.com', href: 'mailto:animeandmanga1810@gmail.com', icon: SiGmail, color: '#EA4335' },
  { label: 'WhatsApp', value: '+880 187 262 5832', href: 'http://wa.me/+8801872625832', icon: SiWhatsapp, color: '#25D366' },
  { label: 'GitHub', value: 'md-hasibur-rahman', href: 'https://github.com/md-hasibur-rahman', icon: SiGithub, color: '#FFFFFF' },
  { label: 'LinkedIn', value: 'hasibur-rahman', href: 'https://www.linkedin.com/in/hasibur-rahman-b50048391/', icon: SiLinkedin, color: '#0A66C2' },
];

const socialLinks = [
  { name: 'Twitter', url: 'https://x.com/animeandmang', icon: SiX, color: '#000000' },
  { name: 'Discord', url: 'https://canary.discord.com/channels/1445706862828847116/1445706863428767767', icon: SiDiscord, color: '#5865F2' },
  { name: 'YouTube', url: 'https://www.youtube.com/@hasiburrahman18-o6p', icon: SiYoutube, color: '#FF0000' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1AnuUToWLp/', icon: SiFacebook, color: '#1877F2' },
  { name: 'Instagram', url: 'https://www.instagram.com/animeandmanga18100?igsh=MWlmazZlZDI2bnVzZg==', icon: SiInstagram, color: '#E4405F' },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const templateParams = {
        from_name: formData.get('name'),
        reply_to: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      const response = await emailjs.send('service_pq0e1uf', 'template_rd6zto4', templateParams);

      if (response.status === 200) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 4000);
      }
    } catch (error) {
      console.log('[v0] Email send error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            আমার সাথে যোগাযোগ করুন
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/40 mx-auto" />
          <p className="text-lg text-muted-foreground mt-6">
            আপনার আইডিয়া শেয়ার করুন অথবা আমার সাথে কাজ করার সুযোগ নিয়ে আলোচনা করুন।
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="আপনার পূর্ণ নাম"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  বিষয়
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="আপনার বার্তার বিষয়"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  বার্তা
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                  placeholder="আপনার বার্তা এখানে লিখুন..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-cyan bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 hover:border-accent/60 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
              </Button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-accent text-sm text-center"
                >
                  ✓ বার্তা সফলভাবে পাঠানো হয়েছে!
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-destructive text-sm text-center"
                >
                  ✗ কোন সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">দ্রুত যোগাযোগ</h3>

            {/* Direct Contact Methods */}
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <contact.icon className="text-2xl" style={{ color: contact.color }} />
                  <div className="flex-1 text-left">
                    <h4 className="text-foreground font-semibold mb-1">{contact.label}</h4>
                    <p className="text-muted-foreground text-sm group-hover:text-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-border">
              <h4 className="text-foreground font-semibold mb-6">সোশ্যাল মিডিয়ায় আমাকে অনুসরণ করুন</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                  >
                    <social.icon className="text-2xl" style={{ color: social.color }} />
                    <span className="text-xs text-muted-foreground group-hover:text-accent">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Note */}
            <p className="text-sm text-muted-foreground mt-8">
              আমি সাধারণত ২৪ ঘণ্টার মধ্যে সকল মেসেজের উত্তর দিই।
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
