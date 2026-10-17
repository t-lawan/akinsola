import React from "react"
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
const Introduction = (props) => {

    return (
        <Container>
            <p>{props.info.description}</p>
        </Container>
    )
}

export default Introduction;
