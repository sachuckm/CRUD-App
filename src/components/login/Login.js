import React, { Component } from 'react';
import './Login.css';
import Inventory from './../inventory/Inventory';
import NewProduct from './../products/NewProduct';
import ReactDOM from 'react-dom';
import logo from './../../images/logo.png';

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {username: '', pass:'', isLoggedIn:false};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleSubmit(event) {
      this.setState({isLoggedIn: true});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      const image = (<img src={logo}></img>);
    const  loginPage = isLoggedIn? (<Inventory/>):
    (<div className="loginPage">
    <div className="info" >
      <div className="header">{image}</div>
      <p className="title">Inventory management software for growing businesses.</p>
      <p className="message">Increase your sales and keep track of every unit.</p>
    </div>
  <form className="loginForm" onSubmit={this.handleSubmit}>
  <label className="loginTitle">Login</label>
    <label className="loginUName" >
      <input placeholder="Email" className="loginUnameInput" type="text" />
    </label>
    <label className="loginPass" >
      <input placeholder="Password" className="loginPassInput" type="password" value={this.state.value}/>
    </label >
  <label className="forgotPassword">Forgot password?</label>    
    <input className="loginSubmit" type="submit" value="Submit" />
  </form>
  </div>)
      return (
        <div> {loginPage} </div>
      );
    }
  }
  ReactDOM.render(
    <Login />,
    document.getElementById('root')
  );