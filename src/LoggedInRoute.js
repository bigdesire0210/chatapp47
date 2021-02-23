import { Redirect, Route } from 'react-router-dom'
import Room from './pages/Room'
import { AuthContext } from './AuthService'
import { useContext } from 'react'

const LoggedInRoute = ({ component: Component, rest }) => {
    const user = useContext(AuthContext)
    return (
        <Route render={props =>
            user ? (
                <Component {...props} />
            ) : (
                    <Redirect to='/login' />
                )
        }{...rest}
        // component={Room} 
        />
    )
}

export default LoggedInRoute