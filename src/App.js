import './App.css';
import {Route, Switch} from 'react-router-dom';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact
					   path="/projects"
					   component={ProjectList}/>
				<Route path="/projects/:projectId"
					   component={ProjectDetails}/>
			</Switch>
		</div>
	);
}

export default App;