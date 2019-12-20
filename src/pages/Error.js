import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
const ErrorComp = () => {
  return (
    <Hero>
      <Banner title='404' subTitle="Page don't exist">
          <Link to='/' className="btn-primary">Return home</Link>
      </Banner>
      
    </Hero>
  )
}

export default ErrorComp
