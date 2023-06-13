import React, { useEffect, useState } from 'react'
import './navbar.css'

function Navbar() {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll' , transitionNavBar)

    }, [])


  return (

    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav_contents'>
        <img className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />
        <img className='nav_avatar' src='https://icon-library.com/images/netflix-logo-icon/netflix-logo-icon-10.jpg' alt='' />

        </div>
      
        

    </div>
  )
}

export default Navbar