import React, {Component} from 'react';

class Logout extends Component {
    render() {
        // this.props.logout();
        return (
            <div>
                <h1>Chao</h1>
            </div>
        );
    }
}
/*
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
};*/

//export default connect(mapStateToProps, mapDispatchToProps)(Logout);
export default Logout;