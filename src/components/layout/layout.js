import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "../navbar/navbar"
import { GlobalStyle, size } from "../../index.styles"
import Header from "../header/header"
import State from "../state/state"
import Background from "../background/background"
const LayoutWrapper = styled.div`
  padding: 1em;
  padding-bottom: 0;
  /* text-align: center; */
  min-height: 100vh;
`

const Columns = styled.div`
  /* padding: 0.5em; */
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-column-gap: 3em;
  max-height: 90vh;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  overflow-y: scroll;
  position: relative;
  padding-top: 5rem;
  @media (max-width: ${size.tablet}) {
    position: relative;
    margin-top: 1.5rem;
    padding-top: 2rem;
    z-index: 0;
  }
  height: 100%;
`

const Main = styled.main`
  padding: 1em;
  padding-top: 0;
  min-height: 80vh;
  overflow-y: scroll;

  @media (max-width: ${size.tablet}) {
    padding: 0;
  }
`

const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <State />
      {/* <Background /> */}
      <Header />

      <Columns>
        <Column>
          <Navbar />
        </Column>
        <Column showInMobile>
          <Main id="main">{props.children}</Main>
        </Column>
      </Columns>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
}

export default Layout
