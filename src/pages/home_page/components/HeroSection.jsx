import React, { useState, useEffect } from "react";
import { ButtonPrimary } from "../../../components/buttons";

export const HeroSection = () => {
  const img1 =
    "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/elements/home/home_slider4.49d888a3.jpg";
  const img2 =
    "https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

  const carousel = [
    {
      img: img1,
      text: "Discover the creative universe of our artists.",
      button: "Discover",
    },
    {
      img: img2,
      text: "Discover the creative universe of our artists.",
      button: "Discover",
    },
  ];
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => sliderControler(), 5000);
    return () => clearInterval(id);
  }, []);
  const sliderControler = () =>
    setSliderIndex((prev) => (prev + 1) % carousel.length);

  return (
    <section className="hero-section grid-overlay">
      <div className="hero-img">
        <img alt="hero" src={carousel[sliderIndex].img} />
      </div>
      <div className="hero-overlay flex-col">
        <div className="hero-content">
          <h1>{carousel[sliderIndex].text}</h1>
          <ButtonPrimary className="hero-sec-button">
            {carousel[sliderIndex].button}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};
