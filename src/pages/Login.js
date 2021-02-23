import React from 'react'
import firebase from '../config/firebase'

import { useState, useContext } from 'react'
import { AuthContext } from '../AuthService'
import { Redirect } from 'react-router-dom'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to="/" />
    }

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')  // '/' に遷移
            })


            .then((user) => {
                console.log(user)
            })

            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
            })
    }


    return (
        <AuthContext.Provider value={user}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </AuthContext.Provider>
    )
}

export default Login