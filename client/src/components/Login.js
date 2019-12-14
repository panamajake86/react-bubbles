import React from "react";
import axios from 'axios';


class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    login: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value
      }
    })
  };

  logItIn = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.login)
      .then(res => {
        console.log("login page .post", res.data.payload);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <h3>Log In Here!</h3>
        <form onSubmit={this.logItIn}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.login.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.login.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </>
    );
  }
};

export default Login;
