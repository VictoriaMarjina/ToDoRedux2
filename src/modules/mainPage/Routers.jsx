import React, { Suspense } from 'react';
import {
    Route,
    Switch,
    HashRouter as Router,
} from 'react-router-dom';
import SignUpPage from '../signUpPage';
import SignInPage from '../signInPage';

const Routers = props => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={'/'} exact component={SignUpPage}/>
                    <Route path={'/sign-in'} component={SignInPage}/>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default React.memo(Routers)
