import React from "react"
import contents from "../data/contents"
import Accordion from "./accordion"
import DemoWrapper from "./demo-wrapper"

class App extends React.Component {
  render() {
    return (
      <DemoWrapper>
        <Accordion {...{
          contents
        }} />
      </DemoWrapper>
    ) 
  }
}

export default App
