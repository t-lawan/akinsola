import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Colours, size } from "../../index.styles"
import { connect } from "react-redux"
import { toggleNavbar, changeFilterView, toggleModal } from "../../store/action"
import Navbar, { FILTER_VIEW } from "../navbar/navbar"
import Hamburger from "hamburger-react"

export const OnlyMobileWrapper = styled.div`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: inherit;
    z-index: 1000; 
  }
`

const StyledHamburger = styled(Hamburger)`
  z-index: 300;
`

const NavbarWrapper = styled.div`
  display: none;
  padding: 1rem;
  @media (max-width: ${size.tablet}) {
    position: fixed;
    width: 70vw;
    height: 100vh;
    display: inherit;
        top: 0;
    left: 0;
    z-index: 200;
  }
`

const HeaderWrapper = styled.header`
  padding: 1rem 1rem;
  /* mix-blend-mode: difference; */
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  /* z-index: 300; */
  /* margin-bottom: 10em; */
  width: 100%;
  @media (max-width: ${size.tablet}) {
    padding: 0rem;
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
    display: ${(props) => (props.showInMobile ? "inherit" : "none")};
  }
`
const Header = (props) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <FlexHeader>
          <Link to="/">
            <HeaderText $showInMobile={true}>akinsola lawanson</HeaderText>
          </Link>
          <OnlyMobileWrapper>
            <StyledHamburger size={24} color={Colours.dark_purple} toggled={isOpen} toggle={setOpen} />
            {/* {isOpen && <Navbar />} */}
          </OnlyMobileWrapper>
        </FlexHeader>
      </HeaderWrapper>
      {isOpen && (
        <NavbarWrapper>
          <Navbar $reverse={true} showInMobile={true} />
        </NavbarWrapper>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    showNavbar: state.showNavbar,
    filter_view: state.filter_view,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavbar: () => dispatch(toggleNavbar()),
    toggleModal: () => dispatch(toggleModal()),
    changeFilterView: (filter_view) => dispatch(changeFilterView(filter_view)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
