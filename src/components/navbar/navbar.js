import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import { TOGGLE_NAVBAR } from "../../store/action";

const NavbarWrapper = styled.div`
  z-index: 100;
  padding: 1em;
  padding-top: 0;
  /* padding-top: 2em; */
  overflow-y: scroll;
  position: fixed;
  @media (max-width: ${size.tablet}) {
    position: initial;
    display: ${props => (props.show ? "inherit" : "none")};
    border-bottom: 1px solid black;
  }
`
const NavbarTitle = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  color: rgb(54,54,82);
  &:hover {
    color: transparent;
  }
  @media (max-width: ${size.tablet}) {
  margin-bottom: 0.5em;

  }

  /* padding-left: ${props => props.randomPadding}; */
`

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0.5rem;
  /* border-bottom: 1px solid black; */
`

const FilterText = styled.p`
  cursor: pointer;
  font-style: ${props => (props.selected ? "italic" : "")};
  font-weight: ${props => (props.selected ? "bold" : "")};
  display: ${props => (props.show ? "" : "none")};
  font-size: 1rem;
`

const createRandomPadding = () => {
  const padding = Math.floor(Math.random() * 6) + 1
  return `${padding}em`
}

const generateProjectIcon = type => {
  let icon
  switch (type) {
    case "portfolio":
      icon = "+"
      break
    case "web":
      icon = "*"
      break
    case "general":
      icon = ""
      break
    default:
      icon = "2"
      break
  }

  return icon
}

class Navbar extends React.Component {
  links
  projectTypes = [
    {
      id: "all",
      display: "all",
    },
    {
      id: "web",
      display: "web",
    },
    {
      id: "portfolio",
      display: "portfolio",
    },
  ]

  constructor(props) {
    super(props)
    this.state = {
      type: this.projectTypes[0],
      showFilter: false,
    }
  }

  isSelectedFilter = id => {
    return this.state.type.id === id
  }

  toggleFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter,
    })
  }

  changeFilter = id => {
    let newFilter = this.projectTypes.find(type => {
      return type.id === id
    })
    if (newFilter) {
      this.setState({
        type: newFilter,
      })
    }
  }

  toggleNavbar = () => {
    this.toggleFilter()
    this.props.toggleNavbar()
    document.getElementById('main').scrollIntoView()
  }

  render() {
    let filteredLinks
    this.links = this.props.pages.sort((a, b) => {
      return a.order - b.order
    })

    filteredLinks = this.links

    if (this.state.type.id !== "all") {
      filteredLinks = this.links.filter(lk => {
        return lk.projectType === this.state.type.id
      })
    }
    return (
      <NavbarWrapper show={this.props.showNavbar}>
        <FilterWrapper>
          <FilterText
            selected={true}
            show={!this.state.showFilter}
            onClick={() => this.toggleFilter()}
          >
            {" "}
            filter{" "}
          </FilterText>

          {this.projectTypes.map((ty, index) => (
            <FilterText
              show={this.state.showFilter}
              onClick={() => this.changeFilter(ty.id)}
              selected={this.isSelectedFilter(ty.id)}
              key={index}
            >
              {" "}
              {ty.display}
            </FilterText>
          ))}
        </FilterWrapper>
        {filteredLinks.map((link, ind) => (
          <NavbarTitle onClick={() => this.toggleNavbar()} key={ind} randomPadding={createRandomPadding()}>
            <AniLink activeClassName="active" to={`${link.slug}`}>
              {link.title.toLowerCase()}
            </AniLink>
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNavbar: () =>
      dispatch({
        type: TOGGLE_NAVBAR
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
