import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Build', href: '#what-we-build', active: true },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-4 border-primary">
      <div className="max-w-screen-xl mx-auto px-margin py-md flex justify-between items-center">
        <a href="#" className="font-serif text-xl font-bold tracking-tighter text-primary select-none">
          ForjaTech
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-lg">
          {NAV_LINKS.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={[
                'font-sans text-label uppercase tracking-widest transition-colors duration-150',
                active
                  ? 'text-primary border-b-2 border-primary pb-0.5'
                  : 'text-secondary hover:text-primary',
              ].join(' ')}
            >
              {label}
            </a>
          ))}
          <a href="#cta" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-primary bg-background px-margin py-md flex flex-col gap-md">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-label uppercase tracking-widest text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#cta" className="btn-ember self-start" onClick={() => setMobileOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
