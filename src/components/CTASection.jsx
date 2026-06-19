import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection() {
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
            Submit your blueprints and let's begin the heat cycle.
          </p>
        </div>
        <a
          href="mailto:hello@forjatech.org?subject=Consulta%20de%20Proyecto%20%E2%80%94%20ForjaTech&body=Hola%20ForjaTech%2C%0A%0AMe%20gustar%C3%ADa%20discutir%20un%20proyecto%20con%20el%20equipo.%0A%0ANombre%3A%20%0ADescripci%C3%B3n%20del%20proyecto%3A%20%0APlazos%20aproximados%3A%20%0APresupuesto%20estimado%3A%20"
          className="btn-ember whitespace-nowrap"
        >
          Start Building
        </a>
      </div>
    </section>
  )
}
