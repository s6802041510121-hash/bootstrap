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

  return (
    <div style={headerStyle}>
      <h1>Student Profile</h1>
    </div>
  );
};

export default Header;
