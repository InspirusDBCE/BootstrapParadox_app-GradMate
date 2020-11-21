import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Base/Home'
import Signup  from './User/Signup'
import Signin from './User/Signin'

const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;