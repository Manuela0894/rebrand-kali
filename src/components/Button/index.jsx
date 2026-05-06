import docIcon from "../../assets/icons/doc-icon.svg";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "10px 16px",
        color: "var(--primary)",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "600"
      }}
    >
         <img src={docIcon} alt="icon" style={{ width: "20px" }}/>
      {children}
    </button>
  );
};

export default Button;