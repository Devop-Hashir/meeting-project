import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Register' element={<Register/>} />
    <Route path='/Dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
