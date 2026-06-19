import { useState } from 'react'
import LegalModal from './legal/LegalModal'

const YEAR = new Date().getFullYear()

const CONNECT_LINKS = [
  { label: 'Contacto', href: 'mailto:hello@forjatech.dev' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

function LinkColumn({ heading, links }) {
  return (
    <div className="flex flex-col gap-xs">
      <h5 className="text-white font-bold uppercase tracking-widest font-sans text-label mb-sm">
        {heading}
      </h5>
      {links.map(({ label, href, onClick }) =>
        onClick ? (
          <button
            key={label}
            onClick={onClick}
            className="text-left text-white/70 hover:text-ember transition-colors duration-150 font-sans text-body-md"
          >
            {label}
          </button>
        ) : (
          <a
            key={label}
            href={href}
            className="text-white/70 hover:text-ember transition-colors duration-150 font-sans text-body-md"
          >
            {label}
          </a>
        )
      )}
    </div>
  )
}

export default function Footer() {
  const [modal, setModal] = useState(null)

  const LEGAL_LINKS = [
    { label: 'Privacidad', onClick: () => setModal('privacy') },
    { label: 'Términos', onClick: () => setModal('terms') },
  ]

  return (
    <>
      <footer className="bg-primary-container border-t-4 border-primary">
        <div className="max-w-screen-xl mx-auto px-margin py-xl flex flex-col md:flex-row justify-between items-start gap-lg">
          {/* Brand */}
          <div className="flex flex-col gap-sm">
            <span className="font-serif text-xl font-bold tracking-tighter text-white">ForjaTech</span>
            <p className="font-sans text-body-md text-white/50 max-w-xs">
              Built to Last. High-performance software engineering for industrial-scale challenges.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-lg">
            <LinkColumn heading="Connect" links={CONNECT_LINKS} />
            <LinkColumn heading="Legal" links={LEGAL_LINKS} />
          </div>

          {/* Meta */}
          <div className="md:text-right flex flex-col gap-xs">
            <p className="text-white/50 font-sans text-body-md">
              © {YEAR} ForjaTech. Built to Last.
            </p>
            <div className="flex md:justify-end gap-sm mt-md">
              <div className="w-4 h-4 bg-ember" title="Ember" />
              <div className="w-4 h-4 bg-secondary" title="Iron" />
              <div className="w-4 h-4 bg-white" title="Ash" />
            </div>
          </div>
        </div>
      </footer>

      {modal && <LegalModal type={modal} onClose={() => setModal(null)} />}
    </>
  )
}
