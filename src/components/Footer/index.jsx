import './style.css';
import kaliIcon from "../../assets/icons/kali-icon.svg";

export default function Footer() {

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={kaliIcon} alt="Kali Logo" className="footer-logo" />
          <p className="footer-tagline">The most advanced Penetration Testing Distribution.</p>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h4>Distribution</h4>
            <a href="#download">Download</a>
            <a href="#changelog">Changelog</a>
            <a href="#releases">Releases</a>
          </div>

          <div className="footer-column">
            <h4>Community</h4>
            <a href="#discord">Discord</a>
            <a href="#forum">Our Forum</a>
            <a href="#contribute">Contribute</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#docs">Documentation</a>
            <a href="#bug-tracker">Bug Tracker</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}