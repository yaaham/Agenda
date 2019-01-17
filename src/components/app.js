import React, { Component } from 'react';
import Layout from './Layout';
import UserDetails from './UserDetails';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import data from '../fakedata';

export default class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Layout data={data}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/userdetails" component={UserDetails} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}
