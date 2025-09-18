import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Approach from './components/Appproch'
import Testimonials from './components/Testimonials'
import FAQ from './components/Faqdata'
import ContactForm from './components/Contact'
import Footer from '../main/Footer'
import Servicex from './components/service-x-scroll'

const Home = () => {
  return (
    <div>
      <title>Web development service - Fronx Solutions - online services</title>
      <meta name="description" content="Fronx Solutions Service Business offers top-notch web development, app development, SEO, and UI/UX design services to help your business grow" />
      <Hero/>
      <Services/>
      <Servicex/>
      <Portfolio/>
      <Approach/>
      <Testimonials/>
      <FAQ/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
