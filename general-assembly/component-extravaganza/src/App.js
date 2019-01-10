import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      username: event.target.value
    })
  }
  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }
  compare(event){
    console.log(this);
    // if(event.target.value !== this.state.password){
    //   alert("This password does not match our records")
    // }
  }
  handleSubmit(event){
    event.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h2>Please Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Username: <input type="text" value={this.state.username} onChange={this.handleChange} /></p>
          <p>Password: <input type="text" value={this.state.password} onChange={this.handlePassword}/></p>
          <p>Confirm Password: <input type="text" onChange={this.compare}/></p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
