'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, AlertTriangle, XCircle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Months of waiting',
    description: 'A traditional MVP takes 3-6 months. In the AI era, that is an eternity for your competitors to overtake you.',
    color: 'text-red-400',
    bg: 'bg-red-500/10'
  },
  {
    icon: DollarSign,
    title: 'Ballooning costs',
    description: "Traditional agencies quote £30k, but scope creep and 'sprint extensions' often double that before launch.",
    color: 'text-orange-400',
    bg: 'bg-orange-500/10'
  },
  {
    icon: Users,
    title: 'Coordination nightmares',
    description: 'Designers, devs, and QA working in silos. Miscommunications lead to "spaghetti code" and broken features.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10'
  },
  {
    icon: AlertTriangle,
    title: 'The Result?',
    description: '90% of startups fail before they ship because they ran out of cash waiting for a basic prototype.',
    color: 'text-red-500',
    bg: 'bg-red-600/20'
  },
];

export function Problem() {
  return (
    <section className="py-32 bg-obsidian relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around opacity-5 pointer-events-none">
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <XCircle className="w-3 h-3" />
            The Status Quo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit font-black text-4xl sm:text-5xl text-white mb-8"
          >
            Traditional Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Is Fundamentally Broken</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl leading-relaxed font-light"
          >
            Stop burning runway on slow, manual processes. The "Old Way" is the fastest way to kill your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className={`w-14 h-14 mb-8 rounded-2xl ${problem.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              <h3 className="font-outfit font-bold text-xl text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent w-full max-w-sm" />
          <p className="mt-8 text-2xl text-white font-outfit font-light tracking-wide">
            We built <span className="text-citrus font-bold">The Antigravity Method</span> to fix this.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
