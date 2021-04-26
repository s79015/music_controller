
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
//Graphs
import LineChart_ReCharts from './Charts/LineChart_ReCharts';
import AreaChart_ReCharts from './Charts/AreaChart_ReCharts';

function App() {
  // const title = 'Welcome to new blog';
  // const likes = 50;
  // const person = {name: 'John', age: 36};
  // const link = 'http://www.google.com'

  return (
    // <div className="App">
    //   <dev className="content">
    //         <h2>Hello World</h2>
    //   </dev>
      
    // </div>
    
    <Router>
     
      <LineChart_ReCharts />
      <AreaChart_ReCharts />
      <div className="App">
        
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
              
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}
      
export default App;
