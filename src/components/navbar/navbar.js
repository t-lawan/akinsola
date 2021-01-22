import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import { TOGGLE_NAVBAR, toggleModal } from "../../store/action"
import { Link } from "gatsby"
export const FILTER_VIEW = {
  WEB: "web",
  PROJECTS: "portfolio",
  ALL: "all",
}
const NavbarWrapper = styled.div`
  z-index: 100;
  padding: 1em;
  padding-top: 0;
  /* padding-top: 2em; */
  overflow-y: scroll;
  position: fixed;
  display: block;
  @media (max-width: ${size.tablet}) {
    position: initial;
    display: ${props => (props.show ? "inherit" : "none")};
    /* border-bottom: 1px solid black; */
  }
`
const NavbarTitle = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  color: rgb(54, 54, 82);
  &:hover {
    color: transparent;
  }
  @media (max-width: ${size.tablet}) {
    margin-bottom: 0.5em;
    color: rgb(240, 235, 255);
  }
`

const NavbarLink = styled(Link)`
  @media (max-width: ${size.tablet}) {
    color: rgb(240, 235, 255);
  }
`

class Navbar extends React.Component {
  links

  constructor(props) {
    super(props)
    this.state = {
      showFilter: false,
    }
  }

  render() {
    let filteredLinks

    this.links = this.props.navbar_links.sort((a, b) => {
      return a.order - b.order
    })

    filteredLinks = this.links

    if (this.props.filter_view !== "all") {
      filteredLinks = this.links.filter(lk => {
        return lk.page.type === this.props.filter_view
      })
    }

    return (
      <NavbarWrapper show={this.props.showInMobile}>
        {filteredLinks.map((link, ind) => (
          <NavbarTitle key={ind}>
            <NavbarLink
              onClick={() => this.props.toggleModal()}
              activeClassName="active"
              to={`/${link.page.slug}`}
            >
              {link.title.toLowerCase()}
            </NavbarLink>
          </NavbarTitle>
        ))}
      </NavbarWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages,
    showNavbar: state.showNavbar,
    filter_view: state.filter_view,
    navbar_links: state.navbar_links,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
