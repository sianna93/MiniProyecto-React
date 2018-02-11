import React, {Component} from 'react';
import {history} from "./helper/history";
import {logout} from "./redux/reducer";
import {connect} from "react-redux";

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.logout();
        return (
            <div>
                <h1>Chao</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.isLoginPending);
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);