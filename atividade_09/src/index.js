import React from 'react'
import ReactDOM from 'react-dom'
//mport { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import reduxThunk from 'redux-thunk'


import reducer from './store/reducers'
import Firebase from './utils/Firebase';
//import FirebaseContext from './utils/FirebaseContext'

const store = createStore(
  reducer,
  {},
  applyMiddleware(reduxThunk)
)

const rrProps = {
  Firebase,
  config: {},
  dispatch: store.dispatch
}


ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrProps}>
          <App />
      </ReactReduxFirebaseProvider>
  </Provider>
  ,
  document.getElementById('root')
);
