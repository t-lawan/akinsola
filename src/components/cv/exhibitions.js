import React from "react"
import styled from "styled-components"

const MainText = styled.p`
  flex: 0 0 100%;
  min-width: 0;
`

const ExhibitionType = styled.span`
  font-size: 0.8rem;
  font-style: italic;
`

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

const Exhibitions = (props) => {
    props.exhibitions.sort((a, b) => b.date.localeCompare(a.date))

    return (
        <Container>
            <Title>Exhibitions</Title>
            {props.exhibitions.map((exhibition, index) => (
                <div key={index}>
                    <MainText>{exhibition.year}: `{exhibition.workTitle}`/ {exhibition.title}/ {exhibition.space}, {exhibition.location} <ExhibitionType>({exhibition.type})</ExhibitionType></MainText>
                </div>
            ))}
        </Container>
    )
}

export default Exhibitions;