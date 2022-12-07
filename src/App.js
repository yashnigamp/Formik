import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import User from './Components/User'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route path= '/register' element = {<Registration/>}/>
        <Route path= '/users' element = {<User/>}/>
      </Routes>
    </Router>
  );
}

export default App;
