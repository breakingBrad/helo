import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Form extends Component {
  constructor() {
		super();
		this.state = {
			title: '',
			img: '',
			content: ''
		}
  }
  
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
  }
  
	newPost() {
		const post = {
			title: this.state.title,
			img: this.state.img,
			content: this.state.content
		};
		axios.post('/api/newpost', post).then(() => {
			this.props.history.push('/dashboard');
		});
	}

  render() {
    const imageSource =
    this.state.img == ''
      ? 'https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/no_image.jpg'
      : this.state.img;
    return(
			<div className="form">
				<div className="form-card">
					<h1 className="title">New Post</h1>
					<h3>Title:</h3>
					<input
						className="form-input"
						type="text"
						value={this.state.title}
						onChange={(e) => this.handleChange(e, 'title')}
					/>
					<br />
					<img src={imageSource} alt="preview" className="post-image" />
					<h3>Image URL:</h3>
					<input
						className="form-input"
						type="text"
						value={this.state.img}
						onChange={(e) => this.handleChange(e, 'img')}
					/>
					<h3>Content:</h3>
					<textarea
						className="form-input"
						value={this.state.content}
						onChange={(e) => this.handleChange(e, 'content')}
						cols="30"
						rows="10"
					/>
					<button id='post-button' className="black-button" onClick={() => this.newPost()}>
						Post 
					</button>
				</div>
			</div>
		);
	}
}
export default connect((state) => state)(Form);