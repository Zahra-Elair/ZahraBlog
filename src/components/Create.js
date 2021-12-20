import { useState } from "react";
import { useHistory } from "react-router";




const Create = () => {
    
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("Hazem")
    const [content,setContent]=useState("")
    const [loading,setloading]=useState(false)
    const history=useHistory()
    const fieldColor="#393e46"
    const textColor="white"
    const iconColor="#00adb5"
    
    const HandleSubmit=(e) =>{
        e.preventDefault();
        const blog={title,content,author}
        setloading(true)
        fetch("https://api.jsonbin.io/b/61c0ff5c78cc9429607cadcb",{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(blog)
        
        })
        .then(()=>{
            setloading(false)
            history.push('/ZahraBlog')
        })
           
    }

    

    

    return (  

        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={(e)=>HandleSubmit(e)}>

                <div className="title" id="textField">
                    <div className="fluid ui corner labeled input" >
                        <input  type="text" 
                            variant="filled"
                            style={{background: fieldColor,color: textColor}}
                            value={title}  
                            onChange={(e)=>{setTitle(e.target.value)}}
                            required
                            placeholder="Title..."
                            
                        />
                        <div className="ui corner label">
                            <i className="asterisk icon"
                            variant="filled"
                            style={{color: iconColor}}
                            ></i>
                        </div>
                    </div>
                </div>

                <div className="ui form" id="contentField">
                    <div className="field">
                        <textarea  
                        variant="filled"
                        style={{background: fieldColor,color: textColor}}
                        value={content}  
                        onChange={(e)=>{setContent(e.target.value)}}
                        required 
                        placeholder="Content..."
                        />
                        <div className="ui corner label">
                        <i className="asterisk icon"
                        variant="filled"
                        style={{color: iconColor}}
                        ></i>
                        </div>
                    </div>
                </div>

                <select class="fluid ui dropdown" required id="authorField"
                    value={author} 
                    onChange={(e)=>{setAuthor(e.target.value)}}
                    variant="filled"
                    style={{background: fieldColor,color: textColor}}>
                    <option value='Zahra' style={{color: textColor}}>Zahra</option>
                    <option value='Hazem'style={{color: textColor}}>Hazem</option>
                </select>
                <br/>
                <center>{!loading && <button class="ui button" type="submit" id="addBlogButton" style={{background: '#00adb5',color: 'white'}}>Add Blog</button>}</center>
                <center>{loading && <button class="ui button" type="submit" id="addBlogButton" style={{background: '#00adb5',color: 'white'}}>Adding...</button>}</center>
                
            </form>
        </div>

    );
}
 
export default Create ;