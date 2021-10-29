import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {

  return (
    <Router>
      <div className="App">
          <Header/>
        <div  className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/NewBlog">
              <Create/>
            </Route>
            <Route path="/Blog/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
            
      </div>
    </Router>
  );
}

export default App;
