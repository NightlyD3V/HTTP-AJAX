import React from 'react';
import './FriendsList.css';
import { Link } from 'react-router-dom';

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

    render(){
        return (
            <div className="form-container">
                
                {this.props.friends.map((newFriend) => (
                    <div key={newFriend.id} className="friend-card">
                        <div className="friend-name_age">
                            <h1>{newFriend.name}</h1>
                            <h3>Age: {newFriend.age}</h3>
                        </div>
                        <h3>{newFriend.email}</h3>
                        <div className="card-button_container">
                            <Link to="/update-friends">
                                <button
                                    className="updateButton">Update
                                </button>
                            </Link>
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