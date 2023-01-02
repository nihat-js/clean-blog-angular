import React from 'react'
import { Link } from 'react-router-dom'


import './IndexPage.scss'


import githubImage from '../assets/img/github.svg'
import heroImage from '../assets/img/home-hero.jpg'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function IndexPage() {
  return (
    <div className='index-page'>
      <Nav/>
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

      <span className="snow"></span>

      <Footer/>


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