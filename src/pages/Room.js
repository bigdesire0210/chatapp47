import React, { useEffect, useState, useContext } from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'
import shortid from 'shortid'

//ログインコンポーンネント、サインアップコンポーネントを呼び出す
import Login from './Login'
import SignUp from './SignUp'
import { red } from '@material-ui/core/colors'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    // userの情報を扱えるようにする
    const user = useContext(AuthContext)
    console.log(user.displayName)

    useEffect(() => {
        firebase.firestore().collection('messages').orderBy('time').limit(20)
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        // if (messages.trim()) {
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName,
            //サーバー側の時間設定を取得する
            time: firebase.firestore.FieldValue.serverTimestamp(),
            id: shortid.generate()
        })
        setValue('')
        // } else {
        //     alert('no')
    }
    // }

    // const deleteTodo = id => {
    //     setValue(value.filetr(values => values.id !== id))
    // }

    return (
        <>
            <RedH1>ルーム</RedH1>
            <Ul>
                {/* <li>
                    sample user : sample message
                </li> */}
                {messages ?
                    messages.map((message => {
                        return <Li>{message.user}:{message.content}</Li>
                    })) :
                    <CircularProgress />
                }
            </Ul>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <ButtonSubmit type="submit">送信</ButtonSubmit>
                <button onClick={() => { firebase.auth().signOut() }} >ログアウト</button>
            </Form>
            {/* <button onClick={deleteTodo}>削除</button> */}
        </>
    )
}

const RedH1 = styled.h1`
color: red;
text-align: center;
`
const Input = styled.input`
width: 200px;
height: 30px;
margin: 0 30px;
text-align:center;
`
const Ul = styled.ul`
text-align:center;
font-size: 15px;
list-style: none;
`
const Li = styled.li`
// text-align: left
`

const Form = styled.form`
text-align:center;
`

const ButtonSubmit = styled.button`
margin-right: 20px;
`




export default Room