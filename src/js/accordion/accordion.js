import React from "react"
import AccordionSection from "./accordion-section"


class Accordion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null
    }
  }

  handleToogle(index) {
    this.setState({ selected: index })
  }

  render() {
    const { contents } = this.props

    return (
      <React.Fragment>
        {
          contents.length && contents.map(content => {
            const tabId = content.title.replace(/\s/g,'')

            return (
              <AccordionSection {...{
                content,
                key: tabId,
                onClick: () => {this.handleToogle(tabId)},
                selected: this.state.selected === tabId,
                tabId
              }} />
            )
          })
        }
      </React.Fragment>
    )
  }
}

export default Accordion
