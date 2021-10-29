import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("Hazem")
    const [content,setContent]=useState("")
    const [loading,setloading]=useState(false)
    const history=useHistory()
    
    const HandleSubmit=(e) =>{
        e.preventDefault();
        const blog={title,content,author}
        console.log(JSON.stringify(blog))
        setloading(true)
        fetch("http://localhost:8000/Blogs",{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(blog)
        
        })
        .then(()=>{
            setloading(false)
            console.log("added")
            history.push('/')
        })
        
        
    }

    return (  

        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={(e)=>HandleSubmit(e)}>
                <label>Blog Name : </label>
                <input 
                    type="text" 
                    value={title}  
                    onChange={(e)=>{setTitle(e.target.value)}}
                    required
                />
                <label>Author : </label>
                <select required value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value='Zahra'>Zahra</option>
                    <option value='Hazem'>Hazem</option>
                </select>
                <label>Content : </label>
                <textarea 
                    value={content}  
                    onChange={(e)=>{setContent(e.target.value)}}
                    required
                />
                {!loading && <button>Add Blog</button>}
                {loading && <button>Adding Blog...</button>}
                
            </form>
        </div>

    );
}
 
export default Create ;