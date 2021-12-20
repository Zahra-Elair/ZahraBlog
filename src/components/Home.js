
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";


function Home() {
    
  const {data:Blogs,loading,error} = useFetch("https://api.jsonbin.io/b/61c0ff5c78cc9429607cadcb")
    

    return (
        <div className="blogList">
            <div >
            {error && <h2>{error}</h2>}
            {loading && (
                <div class="ui active centered inline inverted loader"></div>
            )}
            {Blogs && <BlogList Blogs={Blogs} title="All Blogs"  />}
            </div>
            
        </div>
    );
}

export default Home;