import { useState, useEffect } from 'react';
import './style.css';

export default function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselData = [
    {
      title: "Xfce",
      image: "/src/assets/icons/logo-xfce.svg",
      text: "Xfce consists of separately packaged parts that together provide all functions of the desktop environment, but can be selected in subsets to suit user needs and preferences. This is Kali's default desktop environment."
    },
    {
      title: "KDE Plasma",
      image: "/src/assets/icons/logo-kde.svg",
      text: "With Plasma the user is king. Not happy with the color scheme? Change it! Want to have your panel on the left edge of the screen? Move it! Don't like the font? Use a different one! Download custom widgets in one click and add them to your desktop or panel."
    },
    {
      title: "GNOME Shell",
      image: "/src/assets/icons/logo-gnome.svg",
      text: "A press of a button is all it takes to view your open windows, launch applications, or check if you have new messages. Having everything in one place is convenient and means that you don't have to learn your way through a maze of different technologies."
    }
  ];

  useEffect(() => {

    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval); 
  }, [isPaused, carouselData.length]);

  return (
    <div className="carousel-wrapper">
      <div 
        className="custom-card"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {carouselData.map((item, index) => (
          <div 
            key={index} 
            className={`card-slide ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="card-header-content">
              {item.image && <img src={item.image} alt={item.title} className="card-icon" />}
              <h3 className="card-title">{item.title}</h3>
            </div>
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`dot-btn ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}