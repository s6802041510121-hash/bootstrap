import { Link } from "react-router-dom";

const Header = () => {

  const headerStyle = {
    background: "linear-gradient(135deg,#A0E7E5,#B4F8C8)",
    padding: "25px",
    textAlign: "center",
    color: "#333",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px"
  };

  const navContainer = {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "18px"
  };

  const navButton = {
    textDecoration: "none",
    color: "#333",
    background: "#ffffff",
    padding: "10px 22px",
    borderRadius: "14px",
    fontWeight: "600",
    boxShadow: "0 6px 0 #666a70, 0 6px 12px rgba(0,0,0,0.15)",
    transition: "all 0.15s ease"
  };

  return (
    <div style={headerStyle}>
      <h1>Student Profile</h1>
      <hr />

      <div style={navContainer}>
        <Link to="/" style={navButton} className="btn3d">Home</Link>
        <Link to="/edu" style={navButton} className="btn3d">Education</Link>
        <Link to="/act" style={navButton} className="btn3d">Activities</Link>
      </div>

    </div>
  );
};

export default Header;
