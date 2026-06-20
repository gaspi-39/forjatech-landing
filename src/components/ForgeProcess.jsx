import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    number: '01',
    icon: 'local_fire_department',
    title: 'The Heat',
    body: 'Ideas are stripped to their essence and analyzed under extreme scrutiny. We identify the core value proposition and burn away the noise.',
    borderClass: 'md:border-r-4',
  },
  {
    number: '02',
    icon: 'handyman',
    title: 'The Hammer',
    body: 'Iterative development with relentless feedback loops. We strike hard and fast, shaping the product through constant refinement and testing.',
    borderClass: 'md:border-r-4',
  },
  {
    number: '03',
    icon: 'ac_unit',
    title: 'The Tempered State',
    body: 'Final optimization and stabilization. The resulting product is resilient, durable, and ready to face the real-world environment.',
    borderClass: '',
  },
]

function StepCard({ number, icon, title, body, borderClass, delay = 0 }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll p-lg bg-surface border-b-4 md:border-b-0 border-primary
                  ${borderClass} hover:bg-secondary-container transition-colors duration-200`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-lg">
        <span translate="no" className="font-serif text-6xl font-bold text-primary/10 leading-none">{number}</span>
        <span translate="no" className="material-symbols-outlined text-primary" style={{ fontSize: '2.5rem' }}>
          {icon}
        </span>
      </div>
      <h4 className="font-serif font-semibold text-headline-md uppercase mb-sm">{title}</h4>
      <p className="font-sans text-body-md text-on-surface-variant">{body}</p>
    </div>
  )
}

export default function ForgeProcess() {
  const titleRef = useScrollReveal()

  return (
    <section id="process" className="py-xl px-margin bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto">
        <h2
          ref={titleRef}
          className="reveal-on-scroll font-serif font-bold text-5xl uppercase tracking-tight text-center mb-xl"
        >
          The Process of the Forge
        </h2>

        <div className="border-4 border-primary grid grid-cols-1 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} {...step} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
