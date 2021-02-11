import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
	return (
		<div>
			{ // or props.user && 'here comes the html with parameters'
				props.user ? <h1>Welcome, {props.user.username}</h1> : null
			}
			<ul>
				<li>
					{
						props.user ? <Link to="/projects">Projects</Link> :
							<Link to="/signup">Register</Link>
					}
				</li>
			</ul>
			<hr/>
		</div>
	);
}

export default Navbar;
