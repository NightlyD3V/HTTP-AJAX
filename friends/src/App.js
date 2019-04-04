import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
        .then((res) => {
            console.log(res)
            this.setState({friends: res.data})
        })
        .catch((err) => {
          console.log('you fucked up because,', err);
        });
  }

  //FORM HANDLER
  formHaner(event) {
    event.preventDefault();
    
  }

  saveFriend(name, age, email) {
    axios.post('http://localhost:5000/friends', {
      name: name,
      age: age,
      email: email,
    })
    .then((res) => {
      console.log(res);
    }) 
    .catch((err) => {
      console.log('you fucked up because', err);
    })
  }

  render() {
    return (
      <div className="App">
        <FriendsList 
          friends={this.state.friends} 
          saveFriend={this.saveFriend}
        />
      </div>
    );
  }
}

export default App;
