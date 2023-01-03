import { Link } from 'react-router-dom'

import './Nav.scss'
import githubImage from '../assets/img/github.svg'
import hamburgerImage from '../assets/img/hamburger.svg'
import { useState } from 'react'




export default function Nav() {

  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  return (
    <header>
      <nav className='nav'>
        <div className="container">
          <div className="row">
            <h2 className="brand"> NLOG </h2>
            <div className="link">
              <ul>
                <li> <Link to='/'> Home </Link>   </li>
                <li> <Link to='/about'> About </Link>   </li>
                <li> <a href="https://github.com/nihat-js"> <img src={githubImage} alt="" />   </a>   </li>
              </ul>
            </div>
            <div className="hamburger d-none">
              <img src={hamburgerImage} alt="" onClick={() => setToggleMobileNav(!toggleMobileNav)} />
            </div>
          </div>
        </div>
      </nav>
      <nav className={` mobile-nav ${toggleMobileNav ? '' : 'd-none'}   `}   >
        <div className="container">
          <div className="row">
            <ul>
              <li> <Link to='/'> Home </Link>   </li>
              <li> <Link to='/about'> About </Link>   </li>
              <li> <a href="https://github.com/nihat-js"> <img src={githubImage} alt="" />   </a>   </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>


  )
}
