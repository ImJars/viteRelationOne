import React from 'react'
import Header from './assets/components/Header/Header'
import Home from './Home'
import SectionOne from './sectionOne'

function App() {
  return (
    <>
      <section className='w-full h-screen'>
        <Header />
        <Home />
        <SectionOne />
      </section>
    </>
  )
}

export default App
