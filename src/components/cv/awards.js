import React from "react"
import styled from "styled-components"

const Title = styled.p`
    font-weight: bold;
    font-style: italic;
  margin-bottom: 0.5rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Awards = (props) => {

    return (
        <Container>
            <Title>Awards</Title>
            {props.info.awards.map((award, index) => (
                <p key={index}>{award}</p>
            ))}
        </Container>
    )
}

export default Awards;
