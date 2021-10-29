import { Link } from "react-router-dom";

const BlogList=({Blogs,title})=>{

return(
    <div>
    <h1>{title}</h1>
    {Blogs.map(blog=>{
    return(
        
        <div  className="blog" key={blog.id}>
            <Link className="link"  to={`/Blog/${blog.id}`}> 
                <h2>{blog.title}</h2>
            </Link>
            
            <p>written by {blog.author}</p>
             
            
        </div>
        
    )})}
    </div>
)}

export default BlogList;