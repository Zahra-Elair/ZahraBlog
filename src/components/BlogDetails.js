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
            history.push('/ZahraBlog')
        )
    }

    const textColor="black"

    return ( 
        <div className="blogDetails">
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {blog && 
            <div className="ui piled segments">
                <div className="ui segment">
                    <h4 className="ui header">{blog.title}</h4>
                    <p style={{color:textColor}}>{blog.content}</p>  
                </div>
                <div className="ui clearing segment">
                    <button className="ui negative right floated button"  onClick={handleClick}>Delete Blog</button>  
                </div>
                
               
            </div>  
            }
        </div>





     );
}
 
export default BlogDetails;