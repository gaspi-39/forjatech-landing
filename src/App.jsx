import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeBuild from './components/WhatWeBuild'
import ForgeProcess from './components/ForgeProcess'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function SectionDivider() {
  return <div className="w-full bg-primary h-1" aria-hidden="true" />
}

export default function App() {
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
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
