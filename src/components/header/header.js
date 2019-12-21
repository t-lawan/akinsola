import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    padding: 1em;
    text-align: center;
`

const HeaderText = styled.h1`
    
`
const Header = (props) => {

    return (
        <HeaderWrapper>
            <HeaderText>
                Akinsola Thomas Lawanson
            </HeaderText>
        </HeaderWrapper>
    )
}

export default Header;