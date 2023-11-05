import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/login'   element={<ProtectedRoute><Login/></ProtectedRoute>}/>
        <Route path='/signup'   element={<ProtectedRoute><Signup/></ProtectedRoute>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
