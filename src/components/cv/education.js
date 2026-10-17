import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const Title = styled.p`
    font-weight: bold;
    font-style: italic;
  margin-bottom: 0.5rem;
`

const Education = (props) => {
    return (
        <Container>
            <Title>Education</Title>
            {props.info.education.map((edu, index) => (
                <p key={index}>{edu}</p>
            ))}
        </Container>
    )
} 

export default Education;