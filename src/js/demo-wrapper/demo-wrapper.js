import jss from "jss"
import React from "react"
import { wrapperStyles } from "./styles"


const DemoWrapper = props => {
  const { classes } = jss.createStyleSheet(wrapperStyles).attach()

  return (
    <div {...{
      className: classes.wrapper
    }}>
      {props.children}
    </div>
  )
}

export default DemoWrapper
