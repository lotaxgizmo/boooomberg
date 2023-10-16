import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Header() {
  return (
    <div className='flex justify-center align-center w-fit self-center fixed top-1 z-20'>
        <Desktop/>
        <Mobile/>
    </div>
  )
}

export default Header