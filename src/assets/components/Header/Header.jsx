import React from 'react'

function Header() {
  return (
    <>
        <div className='w-full h-14 bg-orange-200'>
            <div className='flex h-full justify-between items-center mx-10'>
                <div>   
                    <div>
                        <ul className='flex space-x-6'>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='flex space-x-6'>
                        <h1>X</h1>
                        <h1>
                            Main Menu
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header