import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: '',
    };
    this.dataRef = null;
  }

  componentDidMount() {

    this.dataRef = database.ref('/wowowowowow/lololol/hehehehe');

    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }
  handleChange = event => {
    const newData = event.target.value;
    this.setState ({
      newData
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.dataRef.push(this.state.newData);
  }
  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          One day, some data from Firebase will go here.
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

