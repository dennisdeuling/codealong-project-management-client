import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import EditProject from './EditProject';


class ProjectDetails extends Component {
	state = {
		title: '',
		description: ''
	};

	componentDidMount() {
		this.getSingleProject();
	}

	getSingleProject = () => {
		const {params} = this.props.match;
		axios
			.get(`http://localhost:5000/api/projects/${params.projectId}`)
			.then(responseFromApi => {
				const {title, description, _id} = responseFromApi.data;
				this.setState({
					_id: _id,
					title: title,
					description: description
				});
			}, error => {
				console.log(error);
			});
	};

	// EDIT PROJECT:
	renderEditForm = () => {
		if (!this.state.title) {
			this.getSingleProject();
		} else {
			//                                     {...props} => so we can have 'this.props.history' in Edit.js
			//                                                                 ^
			//                                                                 |
			return <EditProject theProject={this.state}
								getTheProject={this.getSingleProject} {...this.props} />;
		}
	};

	// DELETE PROJECT:
	deleteProject = () => {
		const {params} = this.props.match;

		axios.delete(`http://localhost:5000/api/projects/${params.projectId}`, {
			withCredentials: true
		})
			.then(() => {
				this.props.history.push('/projects'); // !!!
			}, error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>{this.state.description}</p>
				<div>{this.renderEditForm()} </div>
				<button onClick={() => this.deleteProject()}>Delete project</button>
				{/* <== !!! */}
				<br/>
				<Link to={'/projects'}>Back to projects</Link>
			</div>
		);
	}
}

export default ProjectDetails;
