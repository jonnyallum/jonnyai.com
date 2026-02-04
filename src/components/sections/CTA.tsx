'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/pricing';

export function CTA() {
  return (
    <section className="py-40 bg-obsidian relative overflow-hidden">
      {/* Intense Background FX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian opacity-80" />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-citrus/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 sm:p-20 text-center border-white/5 relative overflow-hidden group"
        >
          {/* Subtle light sweep animation */}
          <motion.div
            animate={{
              left: ['-100%', '200%']
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            className="absolute top-0 w-20 h-full bg-white/5 skew-x-12 blur-2xl pointer-events-none"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-black uppercase tracking-[0.3em] mb-12 shadow-2xl"
            >
              <Terminal className="w-4 h-4 text-citrus" />
              Finalize Initiative
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-outfit font-black text-5xl sm:text-6xl text-white mb-8 leading-[1.1]"
            >
              Ready to <span className="text-citrus">Initiate</span> <br />
              Your Project?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Book a free 30-minute Discovery Call. We&apos;ll audit your vision, show you exactly how our Agent Orchestra will execute it, and provide a clear timeline for your launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                href={siteConfig.calendlyUrl}
                size="lg"
                className="bg-white text-obsidian px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-citrus hover:text-white transition-all duration-300 shadow-2xl shadow-white/5"
              >
                Book Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/10 text-white bg-white/5 backdrop-blur-md px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-obsidian transition-all duration-300"
              >
                Send Message
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Link check marker */}
        <div className="mt-20 text-center flex flex-col items-center">
          <div className="w-12 h-[1px] bg-white/10 mb-8" />
          <p className="text-[10px] text-gray-700 uppercase tracking-[0.5em] font-black">
            Agency Operating System v3.0 // Authorized Access Only
          </p>
        </div>
      </div>
    </section>
  );
}
