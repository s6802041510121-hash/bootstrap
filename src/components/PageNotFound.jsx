import { Link } from "react-router-dom";

function PageNotFound() {

    return (
        <div>
            <h1>Page Not Found (404)</h1>
            <hr />
            <p>There is no Found (404)</p>
            <Link to='/'>Go to Home Page</Link>
        </div>
    )
}

export default PageNotFound;   