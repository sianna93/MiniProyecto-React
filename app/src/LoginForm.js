import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from './redux/reducer';
import './LoginForm.css';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let {user, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <form name="loginForm" onSubmit={this.onSubmit}>
                <div className="form-group-collection">
                    <div className="form-group">
                        <label>User:</label>
                        <input type="text" name="text" onChange={e => this.setState({user: e.target.value})} value={user}/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
                    </div>
                </div>

                <input type="submit" value="Login" />

                <div className="message">
                    { isLoginPending && <div>Please wait...</div> }
                    { isLoginSuccess && <div>Success.</div> }
                    { loginError && <div>{loginError.message}</div> }
                </div>
            </form>

        );
    }


    onSubmit(e) {
        e.preventDefault();
        let { user, password } = this.state;
        this.props.login(user, password);
        this.setState({
            user: '',
            password: ''
        });
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user, password) => dispatch(login(user, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);