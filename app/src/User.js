import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {logout} from "./redux/reducer";
import {connect} from "react-redux";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });


                }
            )
    }

    render() {
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="App">
                    <header>
                        <Link to="/logout">
                            <button type="button">
                                LOGOUT
                            </button>
                        </Link>
                    </header>
                    <p className="App-intro">
                        Users:
                    </p>
                    <div>
                        {users.map(user => (
                            <div key={user.id}>
                                <h3>{user.name} </h3>
                                <label>{user.username} - {user.email}</label>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}


export default User;