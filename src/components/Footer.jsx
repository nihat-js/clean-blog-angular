import './Footer.scss'
import githubImage from '../assets/img/github.svg'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <a href=""> <img src={githubImage} alt="" />  </a>
          <a href=""> <img src={githubImage} alt="" />  </a>
          <a href=""> <img src={githubImage} alt="" />  </a>
        </div>
        <p className="copyright"> Copyright © Your Website 2020 </p>
      </div>
    </footer>

  )
}

