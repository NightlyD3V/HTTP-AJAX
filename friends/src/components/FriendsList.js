import React from 'react';

function FriendsList(props) {
    return (
        <div>
            {props.friends.map((newFriend) => (
                <div key={newFriend.id}>
                    <h1>{newFriend.name}</h1>
                    <h3>{newFriend.age}</h3>
                    <h3>{newFriend.email}</h3>
                    <button>Delete</button>
                </div>
            ))}
            <form>
                <input name="friendName" value="" placeholder="Friend Name..."></input>
                <input name="friendAge" value="" placeholder="Age..."></input>
                <input name="friendEmail" value="" placeholder="Email..."></input>
                <button onClick={props.saveFriend()}>Save</button>
            </form>
        </div>
    )
}

export default FriendsList; 