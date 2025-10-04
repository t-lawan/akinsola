import React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"
import { Colours } from "../../index.styles"

const VideoPlayerWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  border: 2px solid ${Colours.dark_purple};
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
      <ReactPlayer 
      className='react-player' 
      controls={true} width={"100%"} 
      height={"100%"} 
      src={url} 
            config={{
              mixcloud: {
                options: {
                  hide_cover: false,
                  mini: false,
                  light: false
                },
              },
              youtube: {
                playerVars: {
                  showinfo: 0,
                  color: "white",
                  theme: "light",
                  controls: 0,
                  rel:0,
                  iv_load_policy:3,
                },
              },
            }}
      />
    </VideoPlayerWrapper>
  )
}

<iframe width="100%" height="400" src="" frameborder="0" allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;" ></iframe>