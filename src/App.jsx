import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeBuild from './components/WhatWeBuild'
import ForgeProcess from './components/ForgeProcess'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function SectionDivider() {
  return <div className="w-full bg-primary h-1" aria-hidden="true" />
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <WhatWeBuild />
        <SectionDivider />
        <ForgeProcess />
        <SectionDivider />
        <CTASection onContactOpen={openContact} />
      </main>
      <Footer onContactOpen={openContact} />
      {contactOpen && <ContactModal onClose={closeContact} />}
    </>
  )
}
