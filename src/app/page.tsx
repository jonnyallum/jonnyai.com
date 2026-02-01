import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-titanium">
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <Image
          src="/backdrop-hq.png"
          alt="JAI Innovation Lab"
          fill
          className="object-cover object-center grayscale brightness-125 contrast-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-citrus rounded-sm shadow-[0_0_15px_rgba(217,119,87,0.5)]" />
          <span className="futuristic-title text-xl">JONNY AI</span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-medium text-xs tracking-[0.3em] uppercase">
          <a href="#lab" className="hover:text-citrus transition-colors">THE LAB</a>
          <a href="#projects" className="hover:text-citrus transition-colors">SYSTEMS</a>
          <a href="#monetize" className="hover:text-citrus transition-colors">VENTURES</a>
          <button className="btn-citrus !py-2 !px-6 !text-[10px]">CONNECT</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-48">
        <div className="max-w-3xl">
          <p className="text-citrus font-bold tracking-[.4em] mb-6 animate-pulse">SYSTEM STATUS: OPTIMAL</p>
          <h1 className="font-outfit text-7xl md:text-9xl font-black leading-none mb-8 text-void tracking-tighter">
            THE ARCHITECT'S <br />
            <span className="text-citrus">CONSOLE.</span>
          </h1>
          <p className="text-steel text-xl md:text-2xl font-light mb-12 max-w-2xl leading-relaxed">
            Jonny Allum Innovations Ltd engineering high-conviction autonomous systems. We bridge the gap between deterministic logic and high-performance craft.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="btn-citrus">INITIATE PARTNERSHIP</button>
            <button className="px-8 py-3 border border-void/10 font-bold uppercase tracking-widest text-xs hover:bg-void hover:text-white transition-all">
              VIEW CASE STUDIES
            </button>
          </div>
        </div>

        {/* --- STATS CLUSTERS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-48">
          {[
            { label: "AGENTS DEPLOYED", val: "420+" },
            { label: "SYSTEM UPTIME", val: "99.9%" },
            { label: "SIGNAL ACCURACY", val: "94.2%" },
            { label: "ROI MULTIPLIER", val: "12.5X" }
          ].map((stat, i) => (
            <div key={i} className="glass-card">
              <p className="text-[10px] tracking-[.3em] text-citrus font-bold mb-2 uppercase">{stat.label}</p>
              <h4 className="text-4xl font-outfit font-black">{stat.val}</h4>
            </div>
          ))}
        </div>
      </main>

      {/* --- FEATURED VENTURE --- */}
      <section id="lab" className="relative z-10 py-32 bg-ghost/50 border-y border-void/5">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl group">
            <Image
              src="/backdrop-lab.png"
              alt="AI Intelligence Lab"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-citrus/10 mix-blend-overlay" />
          </div>
          <div>
            <h2 className="futuristic-title text-4xl mb-8">KLIQT MEDIA HQ</h2>
            <p className="text-steel text-lg font-light mb-8 leading-relaxed">
              Our flagship autonomous discovery network. We deployed a global 'Honeytrap' infrastructure that scales social presence and evidence collection with zero human intervention.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-4 text-xs font-bold tracking-widest text-void/60">
                <span className="w-2 h-2 bg-citrus rounded-full" /> AUTONOMOUS PROFILING
              </li>
              <li className="flex items-center gap-4 text-xs font-bold tracking-widest text-void/60">
                <span className="w-2 h-2 bg-citrus rounded-full" /> REAL-TIME OSINT DATA-STREAMS
              </li>
              <li className="flex items-center gap-4 text-xs font-bold tracking-widest text-void/60">
                <span className="w-2 h-2 bg-citrus rounded-full" /> ADAPTIVE CONTENT SYNTHESIS
              </li>
            </ul>
            <button className="btn-citrus">EXPLORE LAB</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 py-24 text-center">
        <p className="text-[10px] tracking-[.5em] text-void/30 uppercase font-black">
          Jonny Allum Innovations Ltd | Engineered by AgOS 2.0 | © 2026
        </p>
      </footer>
    </div>
  );
}
