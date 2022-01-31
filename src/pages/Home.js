import React from 'react';
import Creation from '../components/Creation';
import Hero from '../components/Hero/Hero';
import Services from '../components/services/Services';
import Steps from '../components/Steps/Steps';

export default function Home() {
  return <div>
    <Hero />
    <Services />
    <Creation />
    <Steps />
  </div>;
}
