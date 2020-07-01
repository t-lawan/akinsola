import React from "react"
// import Sketch from "react-p5"
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
  backRef;
  constructor(props) {
    super(props);
    this.backRef = React.createRef()
    this.state = {
      width: 1000,
      height: 1000,
      loaded: false
    }
  }

  componentDidMount() {
    this.setWidthAndHeight()
  }

  setWidthAndHeight = () => { 
    let width = 0;
    let height = 0;
    this.setState({
      width: this.backRef.current.clientWidth,
      height: this.backRef.current.clientHeight,
      loaded: true
    })
  }
  t = 0;
  canvas
  setup = (p5, canvasParentRef) => {
    this.canvas = p5.createCanvas(this.state.width, this.state.height).parent(canvasParentRef) // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    // this.canvas.style('z-index', '-1')

    p5.background(240,235,255);
    p5.noStroke();
    p5.fill(215, 211, 227);
  }
  draw = p5 => {
    p5.background(240,235,255);
    p5.fill(220, 209, 254);

    // let width = window.innerWidth;
    // let height = window.innerHeight;
  // make a x and y grid of ellipses
  for (let x = 0; x <= this.state.width; x = x + 30) {
    for (let y = 0; y <= this.state.height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = p5.map(p5.mouseX, 0, this.state.width, -4 * Math.PI, 4 * Math.PI, true);
      const yAngle = p5.map(p5.mouseY, 0, this.state.height, -4 * Math.PI, 4 * Math.PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / this.state.width) + yAngle * (y / this.state.heightwin);

      // each particle moves in a circle
      const myX = x + 20 * Math.cos(2 * Math.PI * this.t + angle);
      const myY = y + 20 * Math.sin(2 * Math.PI * this.t + angle);

      p5.ellipse(myX, myY, 3); // draw particle
    }
  }

  this.t = this.t + 0.001; // update time
  }

  windowResized = (p5) => {
      this.setWidthAndHeight()
      p5.resizeCanvas(this.state.width, this.state.height)
  }
  render() {
    return(
      <>
      {typeof(window) !== undefined ? (
        <BackgroundWrapper ref={this.backRef}>
            {/* {this.state.loaded ? <Sketch setup={this.setup} draw={this.draw} /> : null} */}
        </BackgroundWrapper>
      ): null}  

      </>
    )
    
  }
}

export default Background
