import React from 'react';

class UpdateFriends extends React.Component {
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

    render() {
        return (
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
        )
    }
}

export default UpdateFriends;