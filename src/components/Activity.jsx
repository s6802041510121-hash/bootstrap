function Activity() {

    const boxStyle = {
        background: "linear-gradient(135deg,#ffffff,#eef2ff)",
        padding: "35px",
        borderRadius: "22px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        maxWidth: "650px",
        margin: "40px auto",
        lineHeight: "1.8",
        animation: "fadeIn 1s ease"
    };

    const headingStyle = {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "30px"
    };

    const subTitle = {
        color: "#4f46e5",
        fontWeight: "bold",
        marginTop: "22px",
        fontSize: "20px"
    };

    return (
        <div style={boxStyle} className="activityCard">

            <h1 style={headingStyle}>✨ My Activities</h1>
            <hr />

            <h3 style={subTitle}>🎓 Academic Activities</h3>
            <ul>
                <li className="listPop">Participated in classroom projects and presentations</li>
                <li className="listPop">Worked in team assignments and problem-solving tasks</li>
                <li className="listPop">Practiced computer and information technology skills</li>
            </ul>

            <h3 style={subTitle}>💻 Technology Activities</h3>
            <ul>
                <li className="listPop">Practiced website development using React</li>
                <li className="listPop">Designed UI layouts and creative digital content</li>
                <li className="listPop">Explored new technologies and programming techniques</li>
            </ul>

            <h3 style={subTitle}>🤝 Social & Teamwork Activities</h3>
            <ul>
                <li className="listPop">Collaborated with classmates in group projects</li>
                <li className="listPop">Helped support classmates in learning activities</li>
                <li className="listPop">Participated in college events and teamwork programs</li>
            </ul>

        </div>
    )
}

export default Activity;
