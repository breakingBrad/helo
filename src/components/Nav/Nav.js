import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class Nav extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { location, /*router, params, routes */ } = this.props;
    if (location.pathname !== '/') {
      console.log('nav', location.pathname)
      return (
        <div className="nav-container">
          Nav:
          <div className="nav-button-container">
          <Link to="/dashboard">
            <button className="home-button">Home</button>
          </Link>
          <Link to="/new">
            <button className="new-post-button">New Post</button>
          </Link>
          <Link to="/">
            <button className="logout-button">Logout</button>
          </Link>
          </div>
        </div>
      )
    } else
      return null
  }
}

export default withRouter(Nav);