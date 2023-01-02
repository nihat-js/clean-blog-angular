import React from 'react'
import { Link } from 'react-router-dom'


import './IndexPage.scss'


import githubImage from '../assets/img/github.svg'
import heroImage from '../assets/img/home-hero.jpg'

export default function IndexPage() {
  return (
    <div className='index-page'>
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

      <section className="hero">
        <img className='background'  src={heroImage} alt="" />
        <div className="container">
          <div className="row">
            <h1 className="heading"> Clean Blog  </h1>
            <p className="subheading">  Simple  Blog theme created with react  </p>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="row">
            <BlogBox/>
            <BlogBox/>
            <BlogBox/>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <a href=""> <img src={githubImage} alt="" />  </a>
            <a href=""> <img src={githubImage} alt="" />  </a>
            <a href=""> <img src={githubImage} alt="" />  </a>
          </div>
          <p className="copyright">  </p>
        </div>
      </footer>

    </div>
  )
}


function BlogBox (){
  return (
    <div className="box">
      <h2 className="title"> Magna Lorem ipsum dolor sit amet.</h2>
      <p className="text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quasi. </p>
      <div className="action">
        <button> Read more</button>
      </div>
      <p className="date"> January 29,2023</p>
    </div>
  )
}