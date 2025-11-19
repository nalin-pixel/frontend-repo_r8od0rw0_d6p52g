import { ShieldCheck, Zap, Network, Scale, Layers3 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Finality',
    desc: 'Transactions confirm in seconds with sub-second block times and immediate finality.',
    glow: 'from-cyan-400 via-blue-400 to-violet-500',
  },
  {
    icon: ShieldCheck,
    title: 'Battle-tested Security',
    desc: 'Audited consensus and robust validator set keeps your assets and apps safe.',
    glow: 'from-emerald-400 via-teal-400 to-cyan-400',
  },
  {
    icon: Network,
    title: 'Interoperable by Design',
    desc: 'Seamless bridges and cross-chain messaging connect you across ecosystems.',
    glow: 'from-fuchsia-400 via-pink-400 to-rose-400',
  },
  {
    icon: Scale,
    title: 'Near-zero Fees',
    desc: 'Scale to millions of users with predictable, ultra-low transaction costs.',
    glow: 'from-amber-400 via-orange-400 to-rose-400',
  },
  {
    icon: Layers3,
    title: 'Built for Builders',
    desc: 'First-class SDKs, clear docs, and tools to ship production apps fast.',
    glow: 'from-violet-400 via-indigo-400 to-blue-400',
  },
]

export default function Features() {
  return (
    <section id="tech" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why NeonChain</h2>
          <p className="mt-3 text-slate-300/90">Everything you need to build fast, secure, and delightful web3 experiences.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur group">
              <div className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${f.glow} blur-2xl`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white">
                  <f.icon />
                </div>
                <h3 className="mt-4 text-white font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-slate-300/90 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
