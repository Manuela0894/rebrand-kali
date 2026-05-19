import './style.css'; 


const Hero = () => {
  return (
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
  );
};

export default Hero;