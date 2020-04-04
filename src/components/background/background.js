import React from "react"
import Sketch from "react-p5"
import styled from 'styled-components'

const BackgroundWrapper = styled.div`
    /* z-index: -100; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
class Background extends React.Component {
  t = 0;
  canvas
  setup = (p5, canvasParentRef) => {
    this.canvas = p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    // this.canvas.style('z-index', '-1')

    p5.background(240,235,255);
    p5.noStroke();
    p5.fill(215, 211, 227);
  }
  draw = p5 => {
    p5.background(240,235,255);
    p5.fill(220, 209, 254);

    let width = window.innerWidth;
    let height = window.innerHeight;
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = p5.map(p5.mouseX, 0, width, -4 * Math.PI, 4 * Math.PI, true);
      const yAngle = p5.map(p5.mouseY, 0, height, -4 * Math.PI, 4 * Math.PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * Math.cos(2 * Math.PI * this.t + angle);
      const myY = y + 20 * Math.sin(2 * Math.PI * this.t + angle);

      p5.ellipse(myX, myY, 3); // draw particle
    }
  }

  this.t = this.t + 0.001; // update time
  }

  windowResized = (p5) => {
      p5.resizeCanvas(window.innerHeight, window.innerHeight)
  }
  render() {
    return(
        <BackgroundWrapper>
            <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} />
        </BackgroundWrapper>
    )
    
  }
}

export default Background
