import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginApp from './Login';
import RegisterApp from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>    
    <Routes>
      <Route path="/login" element={ <LoginApp/> }/>     
      <Route path="/register" element={ <RegisterApp/> }/>  
    </Routes>    
  </BrowserRouter>,
  document.getElementById('root')
);