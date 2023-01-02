import { Link } from 'react-router-dom'

import './Nav.scss'
import githubImage from '../assets/img/github.svg'

export default function Nav() {
  return (
    <nav>
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
        </div>
      </div>
    </nav>
  )
}
