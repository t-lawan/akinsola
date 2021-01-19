import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { HamburgerBoring } from "react-animated-burgers"
import { size } from "../../index.styles"
import { connect } from "react-redux"
import { toggleNavbar, changeFilterView, toggleModal } from "../../store/action";
import { FILTER_VIEW } from "../navbar/navbar";

export const Hamburger = styled(HamburgerBoring)`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`
const HeaderWrapper = styled.header`
  padding: 1em 2em;
  mix-blend-mode: difference;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 100;
  /* margin-bottom: 10em; */
  width: 100%;
  @media (max-width: ${size.tablet}) {
  padding: 1em;


  }

`

const FlexHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  text-align: center;
  justify-content: flex-start;
  align-items: baseline;
  @media (max-width: ${size.tablet}) {
  justify-content: space-between;

  }
`

const HeaderText = styled.h3`
  padding-right: 1rem;
  cursor: pointer;
    
  @media (max-width: ${size.tablet}) {
    font-size: 1rem;
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }

`
const Header = props => {
  const changeFilterViewTo = (filter_view) => {
    props.changeFilterView(filter_view)
  }
  return (
    <HeaderWrapper>
      <FlexHeader>
        <Link onClick={() => changeFilterViewTo(FILTER_VIEW.ALL)} to="/">
          <HeaderText showInMobile={true}>akinsola lawanson</HeaderText>
        </Link>
        <HeaderText showInMobile={false} onClick={() => changeFilterViewTo(FILTER_VIEW.PROJECTS)}>projects</HeaderText>
        <HeaderText showInMobile={false} onClick={() => changeFilterViewTo(FILTER_VIEW.WEB)}>web</HeaderText>
        <Hamburger
          toggleButton={props.toggleModal}
          showInMobile={true}
          isActive={props.showNavbar}
          barColor="black"
          buttonWidth={30}
        />
      </FlexHeader>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return {
    showNavbar: state.showNavbar,
    filter_view: state.filter_view
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNavbar: () =>
      dispatch(toggleNavbar()),
      toggleModal: () => dispatch(toggleModal()),
      changeFilterView: (filter_view) => dispatch(changeFilterView(filter_view)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

