import React, { PureComponent } from 'react'

import { Router as Router, Route, Switch } from 'react-router-dom'
import { AboutScreen, AddFlatScreen, FlatDetailScreen, FlatListScreen, HomeScreen, RegisterScreen, LogoutScreen, LoginScreen, ContactScreen } from '../../screen'
import { MenuLayout, TopNavBarLayout } from '../../layout'

import { HOME } from '../../screen/Home'
import { ABOUT } from '../../screen/About'
import { LOGIN } from '../../screen/Login'
import { ADD_FLAT } from '../../screen/AddFlat'
import { FLAT_DETAIL } from '../../screen/FlatDetail'
import { FLAT_LIST } from '../../screen/FlatList'
import { REGISTER } from '../../screen/Register'
import { CONTACT } from '../../screen/Contact'
import { PrivateRoute } from '../../components'
import history  from '../../history'

class UnauthenticatedRouter extends PureComponent {
    render() {
        return (
                <Router history={history}>
                    <TopNavBarLayout>
                        <Switch>
                            <Route exact path={HOME} component={HomeScreen} />
                            <PrivateRoute exact path={ADD_FLAT} component={AddFlatScreen} />
                            <PrivateRoute path={FLAT_DETAIL} component={FlatDetailScreen}/>
                            <Route exact path={FLAT_LIST} component={FlatListScreen} />
                            <Route exact path={CONTACT} component={ContactScreen} />
                            <Route exact path={ABOUT} component={AboutScreen} />
                            <Route exact path={LOGIN} component={LoginScreen}/>
                            <Route exact path={REGISTER} component={RegisterScreen} />
                        </Switch>
                    </TopNavBarLayout>
                    <MenuLayout>
                        <Switch>
                            <Route exact path={HOME} component={HomeScreen} />
                            <PrivateRoute exact path={ADD_FLAT} component={AddFlatScreen} />
                            <PrivateRoute path={FLAT_DETAIL} component={FlatDetailScreen}/>
                            <Route exact path={FLAT_LIST} component={FlatListScreen} />
                            <Route exact path={CONTACT} component={ContactScreen} />
                            <Route exact path={ABOUT} component={AboutScreen} />
                            <Route exact path={LOGIN} component={LoginScreen}/>
                            <Route exact path={REGISTER} component={RegisterScreen} />
                        </Switch>
                    </MenuLayout>
                </Router>           
        )
    }
}
export default UnauthenticatedRouter