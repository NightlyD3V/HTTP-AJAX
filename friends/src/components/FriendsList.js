import React from 'react';

function FriendsList(props) {
    return (
        <div>
            {props.friends.map((newFriend) => (
                <div>
                    <h1>{newFriend.name}</h1>
                    <h3>{newFriend.age}</h3>
                    <h3>{newFriend.email}</h3>
                    <button>Delete</button>
                </div>
            ))}
            <form>
                <input placeholder="Friend Name..."></input>
                <input placeholder="Age..."></input>
                <input placeholder="Email..."></input>
                <button>Save</button>
            </form>
        </div>
    )
}

export default FriendsList; 