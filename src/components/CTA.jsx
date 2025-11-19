export default function CTA() {
  return (
    <section id="get-started" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 sm:p-12 backdrop-blur">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to ship on-chain experiences?</h3>
              <p className="mt-2 text-slate-300/90">Join thousands of developers building the next wave of web3 apps.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 px-6 py-3 text-slate-900 font-semibold shadow-xl shadow-fuchsia-500/20">
                Launch Testnet
              </a>
              <a href="#" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-white">
                View Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
