export const SET_PAGES = "SET_PAGES";
export const IS_LOADED = "IS_LOADED";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SHOW_NAVBAR = "SHOW_NAVBAR";
export const HIDE_NAVBAR = "HIDE_NAVBAR";
export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
export const CHANGE_FILTER_VIEW = "CHANGE_FILTER_VIEW";

export const changeFilterView = (filter_view) => {
    return {
        type: CHANGE_FILTER_VIEW,
        filter_view: filter_view
    }
}

export const toggleNavbar = () => {
    return {
        type: TOGGLE_NAVBAR
    }
}

export const toggleModal = () => {
    console.log('toggleModal CALLED')
    return {
        type: TOGGLE_MODAL
    }
}