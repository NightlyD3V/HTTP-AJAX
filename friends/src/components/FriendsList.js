import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsList: {
                name: '',
                age: '',
                email: '',
            } 
        }
    }

     //FORM HANDLER
    changeHandler = (event)  => {
        this.setState({
            friendsList : {
                ...this.state.friendsList,
                [event.target.name] : event.target.value,
            }
        });
    }
    //ADD FRIEND
    addFriend = (event) => {
        event.preventDefault();
        this.props.saveFriend(this.state.friendsList);
            this.setState({
            friendsList: {
                name: '',
                age: '',
                email: '',
            }
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <input 
                        onChange={this.changeHandler}
                        name="name" 
                        value={this.state.friendsList.name} 
                        placeholder="Friend..."
                        required
                    >
                    </input>

                    <input 
                        onChange={this.changeHandler}
                        name="age"
                        value={this.state.friendsList.age}
                        placeholder="Age..."
                        required    
                    >
                    </input>

                    <input 
                        onChange={this.changeHandler}
                        name="email" 
                        value={this.state.friendsList.email} 
                        placeholder="Email..."
                        required
                    >
                    </input>

                    <button type="submit">Save</button>
                </form>

                {this.props.friends.map((newFriend) => (
                    <div key={newFriend.id}>
                        <h1>{newFriend.name}</h1>
                        <h3>{newFriend.age}</h3>
                        <h3>{newFriend.email}</h3>
                        <div>
                            <button 
                                onClick={() => this.props.deleteFriend(newFriend.id)}>Delete
                            </button>
                            <button
                                onClick={() => this.props.updateFriend(newFriend.id, this.state.friendsList)}>Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList; 