import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import Signup from './pages/Login/Signup';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/login'   element={<Login/>}/>
        <Route path='/signup'   element={<Signup/>}/>
        <Route path='/page-loading'   element={<PageLoading/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
