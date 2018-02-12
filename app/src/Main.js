import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import User from "./User";
import {Route, Switch, Router } from 'react-router-dom';
import Logout from "./Logout";
import {connect} from "react-redux";
import {history} from './helper/history';
import {PrivateRoute} from "./PrivateRoute";

class Main extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path='/' component={User} auth={this.props.isLoginSuccess}/>
                        <Route path='/login' component={LoginForm}/>
                        <Route path='/logout' component={Logout}/>
                    </Switch>
                </Router>
            </div>
        )
    }

}

function mapStateToProps(state) {
   return {
       isLoginPending: state.isLoginPending,
       isLoginSuccess: state.isLoginSuccess,
       loginError: state.loginError
   }
}

export default connect(mapStateToProps)(Main);
