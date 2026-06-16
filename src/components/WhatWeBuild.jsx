import { useScrollReveal } from '../hooks/useScrollReveal'

const PILLARS = [
  {
    icon: 'settings_input_component',
    tag: 'Core 01',
    title: 'Digital Infrastructure',
    body: 'Robust frameworks built to withstand massive scale. We construct the skeletal systems that power modern enterprise.',
  },
  {
    icon: 'precision_manufacturing',
    tag: 'Craft 02',
    title: 'Bespoke Software',
    body: 'Custom tools tailored to specific operational needs. Every line of code is measured and placed with surgical precision.',
  },
  {
    icon: 'speed',
    tag: 'Power 03',
    title: 'High-Performance Systems',
    body: 'Optimization at the lowest levels. We refine system architecture until performance is absolute and latency is a memory.',
  },
]

function PillarCard({ icon, tag, title, body, delay = 0 }) {
  const ref = useScrollReveal()

  return (
    <article
      ref={ref}
      className="reveal-on-scroll border-2 border-primary p-lg flex flex-col gap-md group
                 hover:bg-secondary-container transition-colors duration-200"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="material-symbols-outlined text-5xl text-primary">{icon}</span>
      <h3 className="font-serif font-semibold text-headline-md uppercase tracking-tighter">
        {title}
      </h3>
      <p className="font-sans text-body-md text-on-surface-variant flex-1">{body}</p>
      <div className="pt-md border-t border-primary/20 flex justify-between items-center">
        <span className="font-sans text-label uppercase tracking-widest text-primary/50">{tag}</span>
        <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          arrow_forward
        </span>
      </div>
    </article>
  )
}

export default function WhatWeBuild() {
  const titleRef = useScrollReveal()

  return (
    <section id="what-we-build" className="py-xl px-margin bg-background">
      <div className="max-w-screen-xl mx-auto">
        <div ref={titleRef} className="reveal-on-scroll flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
          <h2 className="font-serif font-bold text-headline-lg text-5xl uppercase tracking-tight whitespace-nowrap">
            What We Build
          </h2>
          <div className="section-rule flex-1 ml-0 md:ml-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.tag} {...pillar} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
