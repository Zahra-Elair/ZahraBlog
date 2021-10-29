
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";


function Home() {
    
  const {data:Blogs,loading,error} = useFetch("http://localhost:8000/Blogs")
    

    return (
        <div className="blogList">
            <div >
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}
            {Blogs && <BlogList Blogs={Blogs} title="All Blogs"  />}
            </div>
            
        </div>
    );
}

export default Home;