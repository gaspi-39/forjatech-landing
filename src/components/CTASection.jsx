import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection({ onContactOpen }) {
  const ref = useScrollReveal()

  return (
    <section id="cta" className="py-xl px-margin bg-primary-container">
      <div
        ref={ref}
        className="reveal-on-scroll max-w-screen-xl mx-auto flex flex-col md:flex-row
                   justify-between items-center gap-lg"
      >
        <div className="max-w-2xl">
          <h2 className="font-serif font-bold text-5xl uppercase tracking-tight text-white mb-sm">
            Ready to forge?
          </h2>
          <p className="font-sans text-body-lg text-white/60">
            Submit your blueprints and let's begin the heat cycle. Our intake for Q4 is now open
            for mission-critical projects.
          </p>
        </div>
        <button onClick={onContactOpen} className="btn-ember whitespace-nowrap">
          Start Building
        </button>
      </div>
    </section>
  )
}
