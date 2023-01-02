import './AboutPage.scss' 
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import  heroImage from   '../assets/img/about-hero.jpg'

export default function AboutPage() {
  return (
    <div className="about-page">
      <Nav/>

      <section className="hero">
        <img className='background'  src={heroImage} alt="" />
        <div className="container">
          <div className="row">
            <h2 className="heading"> About Me  </h2>
            <p className="subheading">   This is what I do </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
