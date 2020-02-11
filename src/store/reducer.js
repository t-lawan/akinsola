import { createStore } from "redux"
import * as ActionTypes from "./action"

const initalState = {
  pages: [],
  isLoaded: false,
  showNavbar: false,
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages,
      })
    case ActionTypes.IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true,
      })
    case ActionTypes.SHOW_NAVBAR:
      return Object.assign({}, state, {
        showNavbar: true,
      })
    case ActionTypes.HIDE_NAVBAR:
      return Object.assign({}, state, {
        showNavbar: false,
      })
    case ActionTypes.TOGGLE_NAVBAR:
      return Object.assign({}, state, {
        showNavbar: !state.showNavbar,
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
