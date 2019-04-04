import React from 'react';
import './FriendsList.css';

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
            <div className="form-container">
                <form onSubmit={this.addFriend} className="form">
                    <input 
                        onChange={this.changeHandler}
                        name="name" 
                        value={this.state.friendsList.name} 
                        placeholder="Friend..."
                        className="form-name"
                        required
                    >
                    </input>

                    <input 
                        onChange={this.changeHandler}
                        name="age"
                        type="number"
                        value={this.state.friendsList.age}
                        placeholder="Age..."
                        className="form-age"
                        required    
                    >
                    </input>

                    <input 
                        onChange={this.changeHandler}
                        name="email" 
                        type="email"
                        value={this.state.friendsList.email} 
                        placeholder="Email..."
                        className="form-email"
                        required
                    >
                    </input>

                    <button type="submit" className="saveButton">Save</button>
                </form>
                
                {this.props.friends.map((newFriend) => (
                    <div key={newFriend.id} className="friend-card">
                        <div className="friend-name_age">
                            <h1>{newFriend.name}</h1>
                            <h3>Age: {newFriend.age}</h3>
                        </div>
                        <h3>{newFriend.email}</h3>
                        <div className="card-button_container">
                            <button
                                className="updateButton"
                                onClick={() => this.props.updateFriend(newFriend.id, this.state.friendsList)}>Update
                            </button>
                            <button 
                                className="deleteButton"
                                onClick={() => this.props.deleteFriend(newFriend.id)}>Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList; 