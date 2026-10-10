import React from "react"
import styled from "styled-components"

const Introduction = (props) => {

    return (
        <div>
            <p>{props.info.description}</p>
        </div>
    )
}

export default Introduction;
