function Education() {

    const boxStyle = {
        background: "#ffffff",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "40px auto",
        lineHeight: "1.8"
    };

    const headingStyle = {
        textAlign: "center",
        marginBottom: "20px"
    };

    const subTitle = {
        color: "#059669",
        fontWeight: "bold",
        marginTop: "15px"
    };

    const linkStyle = {
        color: "#2563eb",
        textDecoration: "none",
        fontWeight: "600"
    };

    return(
        <div style={boxStyle}>

            <h1 style={headingStyle}>🎓 My Education</h1>

            <hr />

            <h3 style={subTitle}>Vocational Certificate</h3>
            <ul>
                <li>Level: Vocational Certificate Year 3</li>
                <li>Institution: Ratchaburi Technical College</li>
            </ul>

            <h3 style={subTitle}>Higher Vocational Certificate</h3>
            <ul>
                <li>Level: Higher Vocational Certificate Year 2</li>
                <li>Institution: Ratchaburi Technical College</li>
            </ul>

            <hr />

            <h3 style={subTitle}>College Website</h3>
            <p>
                <a 
                    href="http://www.rtc.ac.th/RTC2568/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                >
                    🌐 Visit Ratchaburi Technical College
                </a>
            </p>

        </div>
    )
}

export default Education;