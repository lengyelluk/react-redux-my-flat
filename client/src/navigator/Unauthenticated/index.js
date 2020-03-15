import React, { PureComponent } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AboutScreen, AddFlatScreen, FlatDetailScreen, FlatListScreen, HomeScreen, RegisterScreen, LogoutScreen, LoginScreen } from '../../screen'
import { MenuLayout } from '../../layout'

import { HOME } from '../../screen/Home'
import { ABOUT } from '../../screen/About'
import { LOGIN } from '../../screen/Login'
import { FLAT_LIST } from '../../screen/FlatList'
import { REGISTER } from '../../screen/Register'

class UnauthenticatedRouter extends PureComponent {
    render() {
        return (
            <Router>
                <MenuLayout>
                    <Switch>
                        <Route exact path={ABOUT} component={AboutScreen} />
                        <Route exact path={HOME} component={HomeScreen} />
                        <Route exact path={LOGIN} component={LoginScreen}/>
                        <Route exact path={REGISTER} component={RegisterScreen} />
                        <Route exact path={FLAT_LIST} component={FlatListScreen} />
                    </Switch>
                </MenuLayout>
            </Router>
        )
    }
}
export default UnauthenticatedRouter