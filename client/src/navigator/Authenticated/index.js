import React, { PureComponent } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AboutScreen, AddFlatScreen, FlatDetailScreen, FlatListScreen, HomeScreen, RegisterScreen, LogoutScreen } from '../../screen'
import { MenuLayout, TopNavBarLayout } from '../../layout'

import { ABOUT } from '../../screen/About'
import { ADD_FLAT } from '../../screen/AddFlat'
import { FLAT_DETAIL } from '../../screen/FlatDetail'
import { FLAT_LIST } from '../../screen/FlatList'
import { HOME } from '../../screen/Home'
import { REGISTER } from '../../screen/Register'
import { LOGOUT } from '../../screen/Logout'

class AuthenticatedRouter extends PureComponent {
    render() {
        return (
            <Router>
                <TopNavBarLayout>
                    <Switch>
                        <Route exact path={HOME} component={HomeScreen} />
                        <Route exact path={ADD_FLAT} component={AddFlatScreen} />
                        <Route exact path={FLAT_LIST} component={FlatListScreen} />
                        <Route path={FLAT_DETAIL} component={FlatDetailScreen}/>
                        <Route exact path={ABOUT} component={AboutScreen} />
                        <Route exact path={LOGOUT} component={LogoutScreen}/>
                    </Switch>
                </TopNavBarLayout>
                <MenuLayout>
                    <Switch>
                        <Route exact path={HOME} component={HomeScreen} />
                        <Route exact path={ADD_FLAT} component={AddFlatScreen} />
                        <Route exact path={FLAT_LIST} component={FlatListScreen} />
                        <Route path={FLAT_DETAIL} component={FlatDetailScreen}/>
                        <Route exact path={ABOUT} component={AboutScreen} />
                        <Route exact path={LOGOUT} component={LogoutScreen}/>
                    </Switch>
                </MenuLayout>
            </Router>
        )
    }
}
export default AuthenticatedRouter