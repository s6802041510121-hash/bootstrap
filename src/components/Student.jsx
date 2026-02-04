import BB from "../image/bb.jpg";

function Student(props) {

  const cardStyle = {
    textAlign: "center",
    background: "#ffffff",
    padding: "30px",
    width: "320px",
    margin: "50px auto",
    borderRadius: "18px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  };

  const imgStyle = {
    width: "180px",        
    height: "180px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "20px",
    border: "3px solid #e0e0e0"
  };

  return (
    <div style={cardStyle}>
      <img src={BB} alt="student" style={imgStyle} />

      <h2>{props.stdInfo.name}</h2>
      <p>ID : {props.stdInfo.stdid}</p>
      <p>Section : {props.stdInfo.sect}</p>
    </div>
  );
}

export default Student;
