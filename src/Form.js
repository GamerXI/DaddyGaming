import React, { Component} from 'react';
import './Style_Form.css';
class Form extends Component{

constructor(props){
 super(props);

 this.state = {fullName : "Suhail Saifi",
 			   email : "suhailsaifi2020@gmail.com", 
 			   number : "9205604979", 
 			   comment : "Hey there! Nice to meet u :)"
 			   }
 			}

handlechange = (event) =>{
	this.setState ({ [event.target.name] : event.target.value })
}

handlesubmit = (event) =>{
	alert( JSON.stringify(this.state));
	event.preventDefault();
}
	
	render(){
		return(
			<div>
				<form onSubmit={this.handlesubmit}>
					<label>Full Name</label> <br/>
					<input type='text' name="fullName" value={this.state.fullName}
					       onChange={this.handlechange}/> <br/>

					<label>Email</label> <br/>
					<input type='email' name="email" value={this.state.email}
					       onChange={this.handlechange}/> <br/>

					<label>Phone No.</label> <br/>
					<input type='number' name="number" value={this.state.number}
					       onChange={this.handlechange}/> <br/>

					<label>Comment</label> <br/> 
					<textarea name="comment" value={this.state.comment}
					          onChange={this.handlechange}/> <br/>

					<input type="submit" value="send"/>
				</form>

			</div>
		)
	}
}

export default Form;