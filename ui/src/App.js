import axios from "axios";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.getHello = this.getHello.bind(this);
    this.state = {
      hello: ''
    }
  }

  getHello() {
    axios.get('http://localhost:3000/')
         .then((response) => {
           this.setState({hello: response.data.hello});
         })
         .catch((error) => {
           console.log(error);
         });
  }

  componentDidMount() {
    this.getHello()

    setInterval(() => {
      this.getHello();
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          {this.state.hello}
        </p>
      </div>
    );
  }
}

export default App;
