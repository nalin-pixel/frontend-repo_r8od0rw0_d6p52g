import { useState } from 'react'
import { Menu, X, Shield, Cpu, Wallet } from 'lucide-react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-violet-500 shadow-[0_0_25px_rgba(99,102,241,0.6)]" />
        <div className="absolute inset-0 rounded-lg bg-white/10" />
      </div>
      <span className="text-white font-semibold tracking-tight">NeonChain</span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Technology', href: '#tech', icon: Cpu },
    { label: 'Security', href: '#security', icon: Shield },
    { label: 'Wallet', href: '#wallet', icon: Wallet },
    { label: 'Get Started', href: '#get-started' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200 hover:text-white transition-colors text-sm">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 px-4 py-2 text-slate-900 font-semibold shadow-lg shadow-fuchsia-500/20">
            Launch App
          </a>
        </nav>

        <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#get-started" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 px-4 py-2 text-slate-900 font-semibold shadow-lg shadow-fuchsia-500/20">
              Launch App
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
