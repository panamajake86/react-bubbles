import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...dregs }) => {
    return (
        <Route 
            {...dregs}
            render={() => {
                if (localStorage.getItem("token")) {
                    return <Component />;
                } else {
                    return <Redirect to='/' />
                }
            }}
        />
    );
};

export default PrivateRoute;