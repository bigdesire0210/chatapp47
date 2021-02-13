import React from "react"

//Login,SinUp,Roomコンポーネントを呼び出す
import Login from './Login'
import SignUp from './SignUp'
import Room from './Room'

const App = () => {
    return (
        <>
            <Login />
            <SignUp />
            <Room />
        </>
    )
}


export default App