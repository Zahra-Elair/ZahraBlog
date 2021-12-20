import { Link } from "react-router-dom";
const BlogList=({Blogs,title})=>{

    
return(
    <div>
    <h1 style={{marginBottom:'25px'}}>{title}</h1>
    {Blogs.map(blog=>{
    return(
        
        <Link className="link" key={blog.id} to={`/Blog/${blog.id}`}> 

            <div className="ui centered card" id='blogCard'>
                <div className="content">
                <div className="header">{blog.title}</div>
                <div className="meta">{blog.author}</div>
                <div className="description">
                    {`${blog.content.slice(0,30)}...`}
                </div>
                </div>
            </div>

        </Link>
        
    )})}
    </div>

        
)}

export default BlogList;
