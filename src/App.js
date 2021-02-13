import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


import React from "react"

//Login,SinUp,Roomコンポーネントを呼び出す
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'

const App = () => {
    return (
        <>
            <h1>Chat</h1>
            <Router>
                <Switch>
                    <Route path="/" exact component={Room} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
            </Router>
        </>
    )
}


export default App