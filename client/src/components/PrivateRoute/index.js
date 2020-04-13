import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { authenticationService } from '../../_services/authentication.service'

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            const currentUser = authenticationService.currentUserValue;
            console.log('current User: ', currentUser)
            if (!currentUser) {
                // not logged in so redirect to login page with the return url
                console.log('not logged in')
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // authorised so return component
            return <Component {...props} />
        }} />
    )
}