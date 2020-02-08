import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

const HeaderWrapper = styled.header`
    padding: 1em;
    text-align: center;
`

const HeaderText = styled.h1`
    
`
const Header = (props) => {

    return (
        <HeaderWrapper>
            <Link to="/">
            <HeaderText>
                Akinsola Thomas Lawanson
            </HeaderText>
            </Link>

        </HeaderWrapper>
    )
}

export default Header;