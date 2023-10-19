import ListEmployeeComponents from './components/ListEmployeeComponents.jsx'
import './App.css';
import HeaderComponents from './components/HeaderComponents.jsx';
import FooterComponents from './components/FooterComponents.jsx';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
 return (
    <div>
      <Router>
      <HeaderComponents />
      <div className="container">
        <Routes>
          <Route path="/" Component={ListEmployeeComponents}></Route>
          <Route path="/employees" Component={ListEmployeeComponents}></Route>
          <Route path="/add-employee" Component={ListEmployeeComponents}></Route>
        
        </Routes>
        <ListEmployeeComponents />
      
    </div>
    <FooterComponents />
    </Router> // 11 at 4:00
    </div> 
    
  );
}

export default App;
