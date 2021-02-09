import React, {Component} from 'react';
import AuthService from './auth-service';
import {Link} from 'react-router-dom';

class Signup extends Component {

	state = {
		username: '',
		password: ''
	};

	service = new AuthService();

	// handleChange() and handleSubmit() will be added here
	handleFormSubmit = event => {
		event.preventDefault();
		const username = this.state.username;
		const password = this.state.password;

		this.service.signup(username, password)
			.then(response => {
				this.setState({
					username: '',
					password: ''
				});
				// console.log(response);
				this.props.getUser(response);
			}, error => {
				console.log(error);
			});
	};

	handleChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};


	render() {
		return (
			<div>
				<h1>Create your own account</h1>
				<form onSubmit={this.handleFormSubmit}>
					<label>Username:</label>
					<input type="text"
						   name="username"
						   value={this.state.username}
						   onChange={event => this.handleChange(event)}/>

					<label>Password:</label>
					<input type="password"
						   name="password"
						   value={this.state.password}
						   onChange={event => this.handleChange(event)}/>

					<input type="submit"
						   value="Signup"/>
				</form>

				<p>Already have account?
					<Link to={'/'}> Login</Link>
				</p>

			</div>
		);
	}
}

export default Signup;
