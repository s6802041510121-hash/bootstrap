export default function Footer() {
  const style1 = {
    background: "linear-gradient(135deg,#FFAEBC,#A0E7E5)",
    color: "#333",
    fontSize: "15px",
    textAlign: "center",
    padding: "18px",
    marginTop: "40px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    boxShadow: "0 -4px 10px rgba(0,0,0,0.1)"
  };

  return (
    <div style={style1}>
      © Department of Computer Engineering, KMUTNB
    </div>
  );
}
