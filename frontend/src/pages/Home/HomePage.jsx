import React from 'react'
import Hero from './components/Hero'
import HighlightSection from './components/HighlightSection'
import AboutSection from './components/AboutSection'
import ValuesSection from './components/ValuesSection'
import CallToAction from './components/CallToAction'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { productData } from './components/productData'
export default function HomePage() {
  return (
    <div>
        <Hero/>
        <HighlightSection/>
        <ProductGrid
        data={productData}
        category="colecciones"
        title="Nuestras Colecciones"
        subtitle="Completa tu conjunto con papelería coordinada: menús, tarjetas y más."
      />
        <AboutSection/>
        <ValuesSection/>
        <CallToAction/>
    </div>
  )
}
