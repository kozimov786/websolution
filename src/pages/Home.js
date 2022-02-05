import React from 'react';
import Creation from '../components/Creation';
import Extra from '../components/Extra/Extra';
import FormFill from '../components/Form/Form';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Prices from '../components/Prices/Prices';
import Services from '../components/services/Services';
import Steps from '../components/Steps/Steps';
import WhyUs from '../components/WhyUs/WhyUs';

export default function Home() {
  return <div>
    <Hero />
    <Services />
    <Creation />
    <Steps />
    <FormFill />
    <Portfolio />
    <WhyUs />
    <Prices />
    <Extra />
  </div>;
}
