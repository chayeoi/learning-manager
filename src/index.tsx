/* eslint-disable import/no-duplicates */
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import * as firebase from 'firebase/app'
import React from 'react'
import ReactDOM from 'react-dom'

import App from '@/App'
import * as serviceWorker from '@/serviceWorker'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
