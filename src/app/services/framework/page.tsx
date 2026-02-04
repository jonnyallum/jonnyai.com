'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Code, Zap, Shield, Database, Layers, Cloud, Terminal, Cpu, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { frameworkPricing } from '@/data/pricing';

const features = [
  { icon: Layers, title: 'Full-Stack Architecture', description: 'Next.js 15 + React 19 + TypeScript. Production-ready architecture from the first committed line.' },
  { icon: Database, title: 'Neural Database & Auth', description: 'Deep Supabase integration with RLS security, real-time sync, and enterprise auth flows.' },
  { icon: Zap, title: 'AI Orchestration Grid', description: 'Multi-agent orchestration system with persistent memory, task routing, and reflexive logic.' },
  { icon: Shield, title: 'Hardened Security', description: 'OWASP-compliant headers, strict input validation, and real-time security event auditing.' },
  { icon: Cloud, title: 'Cloud-Ready CI/CD', description: 'Automated Vercel/Railway deployment logic with staging environments and zero-downtime rollouts.' },
  { icon: Monitor, title: 'Dynamic UI Core', description: 'Framer Motion integrated with Tailwind CSS for high-performance, cinematic user interfaces.' },
];

const included = [
  'Full AgOS Monorepo Structure',
  'Multi-Flow Authentication',
  'Database Schemas & Migrations',
  'Stripe Payment Orchestration',
  'Neural Email Templates',
  'Admin Control Center',
  'Agent Connectivity Hub',
  'API Route Scaffolding',
  '60+ Premium Components',
  'Zod Schema Validation',
  'Global Error Handling',
  'Analytics Inbound Wiring',
  'Structured SEO Meta Engine',
  'Responsive Native Layouts',
  'Obsidian Dark Mode Core',
  'WCAG 2.1 Accessibility',
];

export default function FrameworkPage() {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Terminal className="w-3 h-3" />
            Infrastructure // Framework
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tighter"
          >
            Own the <span className="text-blue-500">Architecture</span> <br />
            of the Future.
          </motion.h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            Stop building boilerplate. License the AgOS core and deploy a battle-hardened multi-agent
            foundation that scales from MVP to Series A in record time.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-10 border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-white mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white/[0.02] py-32 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">
              Integrated <span className="text-blue-500">Core</span> Stack
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              No more fragmented tutorials. We deliver a cohesive digital organism
              where every module is engineered to work in sync.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.05] transition-all group hover:border-blue-500/20"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30">
                  <Check className="w-3 h-3 text-blue-500" />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-white uppercase tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-outfit font-black text-4xl text-white mb-6 uppercase tracking-tighter">
            Deployment <span className="text-blue-500">Tiers</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">Select the bandwidth that fits your project scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frameworkPricing.slice(0, 3).map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-12 border transition-all duration-300 relative group overflow-hidden ${tier.highlighted ? 'border-blue-500/40 bg-blue-500/[0.03] ring-1 ring-blue-500/20' : 'border-white/5'
                }`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform">
                <Cpu className="w-24 h-24 text-white" />
              </div>

              {tier.highlighted && (
                <div className="absolute top-0 left-12 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Standard Directive
                </div>
              )}
              <h3 className="font-outfit font-black text-2xl text-white mb-4 uppercase tracking-tight">{tier.name}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed h-16">{tier.description}</p>
              <div className="mb-10 flex flex-col">
                <span className="font-outfit font-black text-4xl text-white">{tier.price}</span>
                <span className="text-gray-700 text-[10px] font-black uppercase mt-1">One-Time License Fee</span>
              </div>

              <ul className="space-y-4 mb-12 h-64 overflow-y-auto custom-scrollbar">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-500">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                className={`w-full py-5 rounded-2xl text-xs font-black uppercase tracking-widest ${tier.highlighted ? 'bg-white text-obsidian shadow-xl shadow-white/5' : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black'}`}
              >
                Initiate Purchase
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Panels */}
      <section className="bg-white/[0.02] py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-outfit font-black text-4xl text-white mb-4 uppercase tracking-tighter">
              Deployment <span className="text-gray-500">Queries</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'Is this a technical product?', a: 'Yes. AgOS is an architecture framework for TypeScript/React engineers. If you require zero-code execution, see our Done-For-You Builds.' },
              { q: 'Commercial project rights?', a: 'The license grants unlimited usage for personal and client projects. Resale of the AgOS core framework itself is strictly prohibited.' },
              { q: 'Legacy support windows?', a: 'Every purchase includes full access to the current neural version plus all minor updates. Elite support tiers include direct integration help.' },
              { q: 'Neural refund protocol?', a: 'Due to the immediate delivery of digital architecture assets, we do not offer refunds. We recommend a technical audit before purchase.' },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 border-white/5 hover:bg-white/[0.04] transition-all group"
              >
                <h3 className="font-outfit font-bold text-white mb-4 group-hover:text-blue-500 transition-colors uppercase text-sm tracking-tight">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-20 border-white/5 bg-blue-500/[0.02]"
          >
            <h2 className="font-outfit font-black text-5xl text-white mb-8 tracking-tighter">
              Ready to <span className="text-blue-500">Accelerate?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Join the elite group of technical founders shipping category-defining
              products on the AgOS architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/contact" size="lg" className="bg-white text-obsidian px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all shadow-2xl shadow-white/5">
                Acquire Framework
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white/10 text-white bg-white/5 backdrop-blur-md px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                Compare Vector Models
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
