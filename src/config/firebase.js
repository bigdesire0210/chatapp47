// import * as firebase from 'firebase/app'
import firebase from 'firebase'

import 'firebase/auth'

const firebaseConfig = {
    //　各人の認証情報を記述
    apiKey: "AIzaSyDqTEO_jJVvuJMtrWxwS70j5jpuqDCISw0",
    authDomain: "chat-app-4dbee.firebaseapp.com",
    projectId: "chat-app-4dbee",
    storageBucket: "chat-app-4dbee.appspot.com",
    messagingSenderId: "927319997276",
    appId: "1:927319997276:web:24006fa9d423fb9d8e9f99"
}

firebase.initializeApp(firebaseConfig)

export default firebase