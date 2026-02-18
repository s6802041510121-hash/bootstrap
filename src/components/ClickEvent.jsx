function clickEvent() {

    const handleClick = (event) => {
        window.alert(event.target.innerHTML);
    }

    return (
        <div>
            <button onClick={(e) => handleClick(e)}>Click Me</button>
        </div>
    )
}
export default clickEvent;