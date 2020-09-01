import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { HamburgerBoring } from "react-animated-burgers"
import { size } from "../../index.styles"
import { connect } from "react-redux"
import * as ActionTypes from '../../store/action';
const Hamburger = styled(HamburgerBoring)`
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
  justify-content: space-between;
  align-items: baseline;
`

const HeaderText = styled.h3`
`
const Header = props => {
  return (
    <HeaderWrapper>
      <FlexHeader>
        <Link to="/">
          <HeaderText>akinsola lawanson</HeaderText>
        </Link>
        <Hamburger
           toggleButton={props.toggleNavbar}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNavbar: () =>
      dispatch({
        type: ActionTypes.TOGGLE_NAVBAR
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

