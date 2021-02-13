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
				{
					this.props.user ?
						<div>
							Welcome, {this.props.user.username}
							<br/>
							<Link to='/'>
								<button onClick={() => this.logoutUser()}> Logout</button>
							</Link>
						</div> :
						<div>
							<Link to="/signup">Register</Link>
						</div>
				}
				<hr/>
			</div>
		);
	}
}

export default Navbar;
