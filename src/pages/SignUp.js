import React from 'react'
import firebase from '../config/firebase'

import { useState } from 'react'

const SignUp = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })

            })

            .then(() => {
                history.push('/')
            })

            .catch((error) => {
            })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        name='name'
                        type='text'
                        id='name'
                        placeholder='name'
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Sign Up</button>

            </form>
        </div>
    )
}


export default SignUp