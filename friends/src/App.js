import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import UpdateFriend from './components/UpdateFriend';
//ROUTE
import { Route } from 'react-router-dom';

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

  //SAVE FRIEND
  saveFriend = (friends) => {
    axios.post('http://localhost:5000/friends', friends)
    .then((res) => {
      console.log(res);
      this.setState({
          friends: res.data,
      })
      alert('Friend Updated');
    }) 
    .catch((err) => {
      console.log('you fucked up because', err);
    })
  }

  //REMOVE FRIEND 
  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then((res) => {
      this.setState({
          friends: res.data,
        })
      })
    .catch((err) => {
      console.log('you fucked up because', err);
    })
  }

  //UPDATE FRIEND 
  updateFriend = (id, update) => {
    axios.put(`http://localhost:5000/friends/${id}`, update)
    .then((res) => {
      console.log(res);
      if(update.name === '' || update.age === '' || update.email === '') {
        return alert('you are missing a field');
      }
      this.setState({
        friends: res.data,
      })
    })
    .catch((err) => {
      console.log('you fucked up because', err);
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <FriendsList
          friends={this.state.friends} 
          saveFriend={this.saveFriend}
          deleteFriend={this.deleteFriend}
          updateFriend={this.updateFriend}/>}>
        </Route>
      </div>
    );
  }
}

export default App;
