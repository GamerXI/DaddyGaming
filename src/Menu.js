import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Style_Menu.css';
import 'tachyons';
import {BrowserRouter} from 'react-router-dom';
import Form from './Form';

class Demo  extends Component{
	render (){
	// return <div className="Header_Menu">
	// <div className="Menu_list">
	// 	<ul className="nav">
	// 		<li>
	// 		<div className="li_Home grow-large orange">
	// 			 Home
	// 		</div>
	// 		</li>
	// 		<li>
	// 		<div className="li_About grow-large">
	// 			About Us
	// 		</div>
	// 		</li>
	// 		<li>
	// 		<div className="li_Contact grow-large">
	// 			Contact Us
	// 		</div>
	// 		</li>
	// 		<li>
	// 		<div className="li_Work grow-large">
	// 			Our work
	// 		</div>
	// 		</li>
	// 	</ul>
	// </div>
	// </div>




	return <div className="body">
	<div class="container">
  <nav class="navbar">
      <ul>
          <li className="nav1 grow-large"><a href= "#home">Home </a></li>
          <li className="nav2 grow-large"><a href="#about">About</a></li>
          <li className="nav3 grow-large"><a href="#service">Service</a></li>
          <li className="nav4 grow-large"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  <section id="home">
    <h1>Welcome To </h1>
    <h2>E-Cargo</h2>
    <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
  </section>
  <section id="about">
      <h1>About</h1>
      <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
  </section>
  <section id="service">
      <h1>Service</h1>
      <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
  </section>
  <section id="contact">
      <h1>Contact</h1>
      <Form/>
  </section>
</div>
</div>
	}
	}


export default Demo;
