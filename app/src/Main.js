import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import User from "./User";
import {Route, Switch, Redirect, Router, BrowserRouter } from 'react-router-dom';
import Logout from "./Logout";
import store from './redux/store.js';
import {connect} from "react-redux";
import {history} from './helper/history';
import {logout} from "./redux/reducer";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        props.isLoginSuccess
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props } }} />
    )} />
);

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let isLoginSuccess = this.props.isLoginSuccess;
        console.log(isLoginSuccess);
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={User}/>
                        <Route path='/login' component={LoginForm}/>
                        <Route path='/logout' component={Logout}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
    /*<Switch>
                    <Route exact path='/' component={User}/>
                    <Route path='/login' component={LoginForm}/>
                    <Route path='/logout' component={Logout}/>
                </Switch>*/

    /*<Route exact path="/" render={() => (
                            isLoginSuccess ? (
                                <User/>
                            ) : (
                                <Redirect to="/login"/>
                            )
                        )}/>
     */

}

function mapStateToProps(state) {
   return {
       isLoginSuccess: state.isLoginSuccess,
   }
}

export default connect(mapStateToProps)(Main);