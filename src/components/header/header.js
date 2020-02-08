import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

const HeaderWrapper = styled.header`
    padding: 1em;
    text-align: center;
    display:flex;
    flex-direction: row;
    align-content: flex-start;
`

const HeaderText = styled.h3`
    
`
const Header = (props) => {

    return (
        <HeaderWrapper>
            <Link to="/">
            <HeaderText>
                akinsola lawanson
            </HeaderText>
            </Link>

        </HeaderWrapper>
    )
}

export default Header;