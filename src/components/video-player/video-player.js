import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const VideoPlayerWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player iframe { width:100%; height:100%; }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`
// Render a YouTube video player
export const VideoPlayer = ({ url }) => {

  return (
    <VideoPlayerWrapper>
      <ReactPlayer className='react-player' controls={true} width={"100%"} height={"100%"} url={url} />
    </VideoPlayerWrapper>
  )
}
