import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import ProjectList from './components/projects/ProjectList';

class App extends React.Component {

	state = {
		loggedInUser: null
	};

	getTheUser = userObj => {
		console.log('Inside getTheUser');
		console.log(userObj);
		this.setState({
			loggedInUser: userObj
		});
	};

	render() {
		return (
			<div className="App">

				<Navbar user={this.state.loggedInUser}/>

				<Switch>
					<Route exact path='/signup'
						   render={() => <Signup
							   getUser={this.getTheUser}/>}/>
					<Route exact path='/'
						   render={() => <Login
							   getUser={this.getTheUser}/>}/>
					<Route exact path="/projects"
						   component={ProjectList}/>
					<Route path="/projects/:id"
						   component={ProjectDetails}/>
				</Switch>
			</div>
		);
	}
}

export default App;