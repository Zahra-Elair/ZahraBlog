import { Link } from "react-router-dom";
const BlogList=({Blogs,title})=>{

    const textColor="black"

return(
    <div>
    <h1 style={{marginBottom:'25px'}}>{title}</h1>
    {Blogs.map(blog=>{
    return(
        
        <Link className="link"  to={`/Blog/${blog.id}`}> 

            <div class="ui centered card" id='blogCard'>
                <div class="content">
                <div class="header">{blog.title}</div>
                <div class="meta">{blog.author}</div>
                <div class="description">
                    {`${blog.content.slice(0,30)}...`}
                </div>
                </div>
            </div>

        </Link>
        
    )})}
    </div>

        
)}

export default BlogList;
