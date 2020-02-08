import React from "react"
import Layout from "../components/layout/layout";

const Video = props => {
    return (
        <Layout>
            <iframe src="https://player.vimeo.com/video/325285352" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </Layout> 
    )
}

export default Video;