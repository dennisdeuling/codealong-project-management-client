import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../auth/auth-service';

class Navbar extends Component {

	service = new AuthService();

	logoutUser = () => {
		this.service.logout()
			.then(() => {
				this.props.getUser(null);
			});
	};

	render() {

		return (
			<div>
				{ // or props.user && 'here comes the html with parameters'
					this.props.user ? <h1>Welcome, {this.props.user.username}</h1> : null
				}
				<div>
					<ul>
						{this.props.user &&
						<li><Link to="/projects">Projects</Link></li>}
						{this.props.user &&
						<Link to='/'>
							<button onClick={() => this.logoutUser()}>Logout</button>
						</Link>}
						{!this.props.user &&
						<li><Link to="/signup">Register</Link></li>}
						{!this.props.user &&
						<li><Link to="/">Login</Link></li>}
					</ul>
				</div>
				<hr/>
			</div>
		);
	}
}

export default Navbar;
