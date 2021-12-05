import { Link } from "react-router-dom";

const  NotFound= () => {
    return (  
        <div>
            <div class="ui error message">
                <div class="header">
                    There were some errors with your submission
                </div>
                <ul class="list">
                    <li>This page cannot be found :(</li>
                </ul>
                
            <Link to='/ZahraBlog'>Back to home page...</Link>
            </div>
        </div>
    );
}
 
export default NotFound;