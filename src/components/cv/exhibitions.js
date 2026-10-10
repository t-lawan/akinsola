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

const Exhibitions = (props) => {
    props.exhibitions.sort((a, b) => b.date.localeCompare(a.date))
    
    return (
        <div>
            <p>Exhibitions</p>
            {props.exhibitions.map((exhibition, index) => (
                <div key={index}>
                    <MainText>{exhibition.year}: `{exhibition.workTitle}`/ {exhibition.title}/ {exhibition.space}, {exhibition.location} <ExhibitionType>({exhibition.type})</ExhibitionType></MainText>
                </div>
            ))}
        </div>
    )
}

export default Exhibitions;