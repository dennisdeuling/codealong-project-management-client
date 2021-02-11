import React, {Component} from 'react';
import axios from 'axios';

class AddProject extends Component {
	state = {
		title: '',
		description: '',
		status: ''
	};

	handleFormSubmit = event => {
		event.preventDefault();
		const {title, description} = this.state;

		axios.post('http://localhost:5000/api/projects', {
			title,
			description
		}, {
			withCredentials: true
		})
			.then(result => {
				this.props.getData();
				this.setState({
					title: '',
					description: '',
					status: 'Your project is created'
				});
			}, error => {
				this.setState({
					status: 'Oh No, we got an error'
				});
			});

		/* With fetch
		fetch('http://localhost:5000/api/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(result => {
				console.log(result);
			}, error => {
				console.log(error);
			});
		 */
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
				{this.state.status !== '' ? this.state.status : this.state.status}
				<form onSubmit={this.handleFormSubmit}>
					<label>Title:</label>
					<input type="text"
						   name="title"
						   value={this.state.title}
						   onChange={event => this.handleChange(event)}/>
					<label>Description:</label>
					<textarea name="description"
							  value={this.state.description}
							  onChange={event => this.handleChange(event)}/>

					<input type="submit"
						   value="Submit"/>
				</form>
			</div>
		);
	}
}

export default AddProject;
