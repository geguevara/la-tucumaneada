import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {PersistGate} from "redux-persist/integration/react"
import { persistor, store } from './redux/store.js'
import app from './firebase/firebase.config.js'

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

    <Provider store={store} app={app}>
      <PersistGate persistor={persistor} >
         <App />
      </PersistGate>
     
    </Provider>
  
)