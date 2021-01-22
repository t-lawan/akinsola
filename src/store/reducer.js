import { createStore } from "redux"
import * as ActionTypes from "./action"
import { FILTER_VIEW } from "../components/navbar/navbar";

const initalState = {
  pages: [],
  navbar_links: [],
  isLoaded: false,
  showNavbar: false,
  showModal: false,
  filter_view: FILTER_VIEW.ALL
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages,
      })
    case ActionTypes.SET_NAVBAR_LINKS:
      return Object.assign({}, state, {
        navbar_links: action.navbar_links,
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
    case ActionTypes.TOGGLE_MODAL:
      return Object.assign({}, state, {
        showModal: !state.showModal,
      })
    case ActionTypes.CHANGE_FILTER_VIEW:
      return Object.assign({}, state, {
        filter_view: action.filter_view,
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
