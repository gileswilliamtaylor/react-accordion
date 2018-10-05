import classnames from "classnames"
import jss from "jss"
import React from "react"
import { Motion, spring } from "react-motion"
import { accordionStyles } from "./styles"


class AccordionSection extends React.Component {
  constructor(props) {
    super(props)
    this.panelRef = React.createRef()
  }

  getHeight() {
    // Get height for react-motion animation
    return this.panelRef.current.scrollHeight
  }

  render() {
    const { content, onClick, selected, tabId } = this.props
    const { classes } = jss.createStyleSheet(accordionStyles).attach()

    return (
      <div {...{
        className: classes.accordionSectionWrapper
      }}>
        <dt {...{
          "role": "heading"
        }}>
          <button {...{
            "aria-controls": tabId,
            "aria-expanded": selected,
            className: classnames(
              classes.accordionButton,
              {
                [classes.accordionButtonActive]: selected
              } 
            ),
            id: `${tabId}-button`,
            onClick
          }}>
            {content.title}
          </button>
        </dt>
        
        <Motion {...{
          defaultStyle: {height: 0},
          style: {height: spring(selected ? this.getHeight(tabId) : 0)}
        }}>
          {
            ({height}) => (
              <dd {...{
                "aria-hidden": selected,
                "aria-labelledby": `${tabId}-button`,
                className: classes.accordionPanel,
                id: tabId,
                ref: this.panelRef,
                style: {
                  height: `${height}px`
                }
              }}>
                <span>
                  {content.description}
                </span>
              </dd>
            )
          }
        </Motion>
      </div>
    )
  }
}

export default AccordionSection
