import {Link} from "react-router-dom";
const  Header = () => {
    return (
        <div className="navbar">
            <Link to="/ZahraBlog" className="link"> <h1>The Dojo Blog</h1> </Link>
            <div className="links">
                <Link to="/ZahraBlog">Home</Link>
                <Link to="/NewBlog" className="newBlog" >New Blog</Link>
            </div>
        </div>
    );
}

export default Header;