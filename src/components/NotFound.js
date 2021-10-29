import { Link } from "react-router-dom";

const  NotFound= () => {
    return (  
        <div>
            <h1>Sorry,</h1>
            <p>This page cannot be found :(</p>
            <Link to='/'>Back to home page...</Link>
        </div>
    );
}
 
export default NotFound;