import React from 'react'
import firebase from '../config/firebase'

//ログインコンポーンネント、サインアップコンポーネントを呼び出す
import Login from './Login'
import SignUp from './SignUp'

const Room = () => {
    return (
        <>
            <h1>Room</h1>
            <button onClick={() => { firebase.auth().signOut() }} >ログアウト</button>
        </>
    )
}


export default Room