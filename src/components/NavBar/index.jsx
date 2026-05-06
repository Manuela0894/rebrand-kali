import Button from "../Button";
import kaliIcon from "../../assets/icons/kali-icon.svg"

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        color: "var(--primary)",
        padding: "16px 32px",
        backgroundColor: "transparent",
        position: "relative",
        
        
      }}
    >
      <img src={kaliIcon} alt="icon" style={{ width: "66px" }}/>

    
        <div  style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
        >
          <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0, 
          fontSize: "14px",
          fontWeight: "600",
        }}
      ><li style={{ fontWeight: "inherit" }}><a href="#">Get Kali</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Community</a></li>
      </ul>
        
      <Button>
        Doc
      </Button>  
        </div>

         <div
    style={{
      padding: "0",
      position: "absolute",
      bottom: 0,
      right: "0",
      width: "662px",
      height: "1px",
      background: "linear-gradient(to right, #AE68FF, white)",
    }}/>
    </nav>
  );
};

export default NavBar;