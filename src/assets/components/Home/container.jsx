import React from 'react'
import RotatingText from '../rotatingText'

function Container() {
  return (
    <>
        <section className='w-full h-full block mx-auto'>
            <div className='flex h-full justify-center bg-red-500 items-center mx-10'>
                <div className='flex w-full h-full'>
                    <div className='w-2/3 h-full bg-slate-200 flex items-center'>
                        <div>
                            <div className='ml-4'>
                                <h1 className='text-6xl font-bold'>
                                    Angel y Paulette
                                </h1>
                                <h2 className='text-4xl font-thin mt-2'>
                                    Nuestra Historia
                                </h2>
                                <RotatingText />
                            </div>
                        </div>
                    </div>
                    <div className='1/3 h-full flex items-center'>
                        <img src="#" alt="image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Container