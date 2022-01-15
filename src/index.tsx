import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterApp from './Register';

ReactDOM.render(
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={ <App/>}/>     
      <Route path="/register" element={ <RegisterApp/>}/>  
    </Routes>    
  </BrowserRouter>,
  document.getElementById('root')
);