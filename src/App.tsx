import { Header } from './components/Header.tsx'
import { Footer } from './components/Footer.tsx'
import { Intro } from './components/Intro.tsx'
import { WhatWeDo } from './components/WhatWeDo.tsx'
import { Portfolio } from './components/Portfolio.tsx'
import { Testimonials } from './components/Testimonials.tsx'
import { Subscribe } from './components/Subscribe.tsx'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <WhatWeDo />
      <Portfolio />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
