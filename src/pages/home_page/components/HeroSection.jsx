import React from 'react'
import { ButtonPrimary } from '../../../components/buttons'

export const HeroSection = () => {
  return (
    <section className="hero-section grid-overlay">
        <div className="hero-img">
          <img
            alt="hero image"
            src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div className="hero-overlay flex-col">
          <h2>Discover the creative universe of our artists.</h2>
          <ButtonPrimary >Discover</ButtonPrimary>
        </div>
      </section>
  )
}
