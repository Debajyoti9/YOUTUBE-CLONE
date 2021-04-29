import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecomendedVideo from './RecomendedVideo';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './Searchpage';
function App() {
  return (
    <div className="app">
       <Router>
          <Header/>
         <Switch>
            <Route path="/search/:searchTerm">
            <div className="app_page">
                   <SideBar/>
                   <SearchPage/>
            </div>
            </Route>
            <Route path="/">
                <div className="app_page">
                   <SideBar/>
                   <RecomendedVideo/>
                </div>
            </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
