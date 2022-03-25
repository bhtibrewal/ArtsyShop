import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { carousel } from "../../../data/carousel";
import { ButtonPrimary } from "../../../components";

export const HeroSection = () => {
  const navigate = useNavigate();
  
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
          <ButtonPrimary
            onClick={() => navigate("/products")}
            className="hero-sec-button"
          >
            <h3>{carousel[sliderIndex].button}</h3>
            <i className="fa-solid fa-arrow-right-long"></i>
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
};
