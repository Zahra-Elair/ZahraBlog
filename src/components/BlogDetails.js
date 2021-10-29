import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {

    const {id} = useParams()
    const {data:blog,loading,error}=useFetch("http://localhost:8000/Blogs/"+id)
    const history=useHistory()
    
    const handleClick=()=>{
        fetch('http://localhost:8000/Blogs/'+id,{
            method:'DELETE'
        })
        .then(
            history.push('/')
        )
    }


    return ( 
        <div className="blogDetails">
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {blog && 
            <article >
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.content}</div>
            </article>}
            <button onClick={handleClick}>DELETE</button>
        </div>
     );
}
 
export default BlogDetails;