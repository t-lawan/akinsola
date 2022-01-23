export const SET_PAGES = "SET_PAGES";
export const SET_NAVBAR_LINKS = "SET_NAVBAR_LINKS";
export const SET_PAGE_INFO = "SET_PAGE_INFO";
export const IS_LOADED = "IS_LOADED";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SHOW_NAVBAR = "SHOW_NAVBAR";
export const HIDE_NAVBAR = "HIDE_NAVBAR";
export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
export const CHANGE_FILTER_VIEW = "CHANGE_FILTER_VIEW";


export const setPages = (pages) => {
    return {
        type:SET_PAGES,
        pages: pages
    }
}

export const setPageInfo = (pageInfo) => {
    return {
        type:SET_PAGE_INFO,
        page_info: pageInfo
    }
}

export const setNavbarLinks = (navbar_links) => {
    return {
        type:SET_NAVBAR_LINKS,
        navbar_links: navbar_links
    }
}

export const isLoaded = () => {
    return {
        type: IS_LOADED
    }
}

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
    return {
        type: TOGGLE_MODAL
    }
}