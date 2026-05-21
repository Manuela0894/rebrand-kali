import './style.css'; 
import kaliIcon from "../../assets/icons/kali-icon.svg";
import iconDoc from "../../assets/icons/doc-icon.svg";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <img src={kaliIcon} className="logo" />
      
      <div className="nav-content">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#about">Contact</a></li>
        </ul>

        <div className="doc-wrapper">
          <img src={iconDoc} />
          <a href="#docs">Documentaion</a>
        </div>
      </div>

      <div className="bottom-border" />
    </nav>
  );
};

export default Navbar;