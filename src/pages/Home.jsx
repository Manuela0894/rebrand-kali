import '../styles/style.css';
import HeroBackground from '../components/HeroBackground/index'
import NavBar from '../components/Header/index'
import CardCarousel from '../components/CardCarousel/index'
import ToolsSection from '../components/ToolsSection/index'
import Footer from '../components/Footer/index'

function Hero() {
  return (
    <>
     <NavBar/>
    <HeroBackground>
    <section className="hero-section">
      <h1 className="hero-title">
        The most advanced Penetration Testing Distribution
      </h1>
      <p className="hero-description">
        Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering
      </p>
      <div className="hero-actions">
        <button className="primary-btn">
          Download
        </button>

        <div className="btn-group">
          <a href="#docs" className="btn-anchor">Documentation</a>
          <a href="#community" className="btn-anchor">Community</a>
          <a href="#blog" className="btn-anchor">Blog</a>
        </div>
      </div>
    </section>
    </HeroBackground>
    <ToolsSection/>
    <CardCarousel/>
    <Footer/>
    </>
  );
};

export default Hero;