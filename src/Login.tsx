import React from 'react';
import GlobalStyle from "./styles/global"
import Login from './components/Login';
import TopNavbar from './components/Navbar';

const LoginApp:React.FC = ()=> (
  <>
  <GlobalStyle/>
  <TopNavbar/>
  <Login/>
  </>
)

export default LoginApp;