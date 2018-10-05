import { colors } from "../../theming/colors"


export const accordionStyles = {
  accordionSectionWrapper: {
    '& + *': {
      // 8-point grid system
      marginTop: 8
    }
  },
  accordionButton: {
    background: colors.buttonGrey,
    border: 0,
    color: colors.white,
    cursor: "pointer",
    font: "inherit",
    padding: 16,
    textAlign: "left",
    transition: "background 200ms ease-in-out",
    width: "100%"
  },
  accordionButtonActive: {
    background: colors.buttonBlue,
  },
  accordionPanel: {
    background: colors.panelGrey,
    margin: 0,
    overflow: "hidden",
    
    '& span': {
      display: "block",
      margin: 16
    }
  }
}
