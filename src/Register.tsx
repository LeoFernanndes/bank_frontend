import React from 'react';
import GlobalStyle from "./styles/global"
import Register from './components/Register'
import TopNavbar from './components/Navbar';

const RegisterApp:React.FC = ()=> (
  <>
  <GlobalStyle/>
  <TopNavbar/>
  <Register/>
  </>
)

export default RegisterApp;