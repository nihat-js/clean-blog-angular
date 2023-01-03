import { Link } from 'react-router-dom'

import './Nav.scss'
import githubImage from '../assets/img/github.svg'
import hamburgerImage from '../assets/img/hamburger.svg'

export default function Nav() {
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
            <div className="hamburger">
              <img src={hamburgerImage} alt="" />
            </div>
          </div>
        </div>
      </nav>
      <nav className="mobile-nav d-none">
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
