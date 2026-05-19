import './style.css'; 

const Navbar = () => {
  return (
    <nav className="nav-container">
      <img src="seu-logo.svg" alt="Logo" className="logo" />
      
      <div className="nav-content">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <div className="doc-wrapper">
          <img src="icone-doc.svg" alt="Docs" />
          <a href="#docs">Docs</a>
        </div>
      </div>

      <div className="bottom-border" />
    </nav>
  );
};

export default Navbar;