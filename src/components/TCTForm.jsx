import { useState } from "react";

function TCTForm() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [region, setRegion] = useState('');
    const [comment, setComment] = useState('');
    const [accept, setAccept] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [popupText, setPopupText] = useState("");

    function FormSubmit(){

        if(!accept){
            setPopupText("⚠ Please Click Accept Agreement");
            setShowPopup(true);
            return;
        }

        setPopupText(
            "✅ Form Submitted\n\n" +
            "Name : " + name + "\n" +
            "Gender : " + gender + "\n" +
            "Region : " + region + "\n" +
            "Comment : " + comment
        );

        setShowPopup(true);
    }

    // ===== Form Style =====

    const cardStyle = {
        background: "#ffffff",
        padding: "35px",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        maxWidth: "520px",
        margin: "40px auto",
        fontFamily: "Segoe UI",
        transition: "0.3s"
    };

    const sectionStyle = {
        marginBottom: "20px"
    };

    const titleStyle = {
        textAlign: "center",
        marginBottom: "25px"
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        marginTop: "8px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        fontSize: "15px"
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        background: "linear-gradient(135deg,#60a5fa,#3b82f6)",
        border: "none",
        borderRadius: "12px",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "16px"
    };

    // ===== Popup Style =====

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(4px)",
        animation: "fadeIn 0.3s"
    };

    const popupStyle = {
        background: "#fff",
        padding: "25px",
        borderRadius: "18px",
        width: "320px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        whiteSpace: "pre-line",
        animation: "popupScale 0.3s"
    };

    const okButton = {
        marginTop: "15px",
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "10px",
        background: "#3b82f6",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
    };

    return (
        <>
            <style>
                {`
                @keyframes popupScale {
                    from { transform: scale(0.7); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `}
            </style>

            <div
                style={cardStyle}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >

                <h1 style={titleStyle}>📋 TCT Form</h1>

                {/* NAME */}
                <div style={sectionStyle}>
                    <label>Name</label>
                    <input
                        style={inputStyle}
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                {/* GENDER */}
                <div style={sectionStyle}>
                    <label>Gender</label><br/>

                    <input type="radio" name="g" value="Male"
                    onChange={e => setGender(e.target.value)} /> Male

                    {"  "}
                    <input type="radio" name="g" value="Female"
                    onChange={e => setGender(e.target.value)} /> Female

                    {"  "}
                    <input type="radio" name="g" value="N/A"
                    onChange={e => setGender(e.target.value)} /> N/A
                </div>

                {/* REGION */}
                <div style={sectionStyle}>
                    <label>Region</label>
                    <select style={inputStyle}
                    onChange={e => setRegion(e.target.value)}>
                        <option value="">Select</option>
                        <option value="North">North</option>
                        <option value="North East">North East</option>
                        <option value="Central">Central</option>
                        <option value="South">South</option>
                    </select>
                </div>

                {/* COMMENT */}
                <div style={sectionStyle}>
                    <label>Comment</label>
                    <textarea style={inputStyle}
                    rows="4"
                    onChange={e => setComment(e.target.value)} />
                </div>

                {/* ACCEPT */}
                <div style={sectionStyle}>
                    <input type="checkbox"
                    onChange={e => setAccept(e.target.checked)} />
                    Accept Agreement
                </div>

                <button style={buttonStyle} onClick={FormSubmit}>
                    🚀 Send Form
                </button>
            </div>

            {/* POPUP */}
            {showPopup && (
                <div style={overlayStyle}>
                    <div style={popupStyle}>
                        {popupText}

                        <button
                            style={okButton}
                            onClick={() => setShowPopup(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}

export default TCTForm;
