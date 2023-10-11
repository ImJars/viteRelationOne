import React from 'react'
import Container from './assets/components/Home/container'

function Home() {
  return (
    <>
        <section className='w-full h-screen bg-blue-50'>
            <div className='flex h-full justify-center items-center'>
                <Container />
            </div>
        </section>
    </>
  )
}

export default Home