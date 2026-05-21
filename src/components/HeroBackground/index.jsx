import './style.css';

export default function HeroBackground({ children }) {
  return (
    <div className="hero-container">
      
      <div className="hero-bg-effect" aria-hidden="true"></div>
      
      
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
}