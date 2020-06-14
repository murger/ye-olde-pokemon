import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import searchReducer from './components/Search/reducers'
import App from './components/App'

const store = createStore(
  combineReducers({
    search: searchReducer,
  })
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
