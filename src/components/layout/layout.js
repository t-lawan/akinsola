import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "../navbar/navbar"
import { GlobalStyle, size } from "../../index.styles"
import Header from "../header/header"
import State from "../state/state"
const LayoutWrapper = styled.div`
  padding: 1em;
  /* text-align: center; */
`

const Columns = styled.div`
  /* padding: 0.5em; */
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 3em;
  max-height: 90vh;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  overflow-y: scroll;
  position: relative;
  @media (max-width: ${size.tablet}) {
    position: initial;
    margin-top: 2.5rem;
  }
  height: 100%;
`

const Main = styled.main`
  /* padding: 1em; */
  min-height: 80vh;
  overflow-y: scroll;
`

const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <State />
      <Header />
      <Columns>
        <Column>
          <Navbar />
        </Column>
        <Column>
          <Main>{props.children}</Main>
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
