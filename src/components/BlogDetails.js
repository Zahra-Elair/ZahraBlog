import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {

    const {id} = useParams()
    const {data:blog,loading,error}=useFetch("https://api.jsonbin.io/b/61c0ff5c78cc9429607cadcb/"+id)
    const history=useHistory()
    
    const handleClick=()=>{
        fetch('https://api.jsonbin.io/b/61c0ff5c78cc9429607cadcb/'+id,{
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