import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
	return (
		<div>
			{ // or props.user && 'here comes the html with parameters'
				props.user ? <h1>Welcome, {props.user.username}</h1> : null
			}
			<div>
				<ul>
					<li><Link to="/projects">Projects</Link></li>
					<li><Link to="/signup">Register</Link></li>
					<li><Link to="/">Login</Link></li>
				</ul>
			</div>
			<hr/>
		</div>
	);
}

export default Navbar;
