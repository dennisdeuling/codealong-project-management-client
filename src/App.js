import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import ProjectList from './components/projects/ProjectList';
import ProtectedRoute from './components/auth/protected-route';

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

				<Navbar user={this.state.loggedInUser} getUser={this.getTheUser}/>

				<Switch>

					<ProtectedRoute
						exact
						user={this.state.loggedInUser}
						path='/'
						component={ProjectList}/>

					<ProtectedRoute
						exact
						user={this.state.loggedInUser}
						path='/projects/:id'
						component={ProjectDetails}/>

					<Route exact path='/signup'
						   render={() => <Signup
							   getUser={this.getTheUser}/>}/>

					<Route exact path='/login'
						   render={() => <Login
							   getUser={this.getTheUser}/>}/>

					{/*<Route exact path="/projects"
						   component={ProjectList}/>*/}

					{/*<Route exact path="/projects">
						{this.state.loggedInUser ? <ProjectList/> : <Redirect to="/"/>}
					</Route>

					<Route path="/projects/:id"
						   render={props => {
							   return this.state.loggedInUser ?
								   <ProjectDetails {...props} user={this.state.loggedInUser}/> :
								   <Redirect to="/"/>;
						   }}/>*/}
				</Switch>
			</div>
		);
	}
}

export default App;