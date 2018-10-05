// Global application of styles (using JSS)
import jss from "jss"
import preset from "jss-preset-default"
import { colors } from "./colors"


const GlobalStyles = () => {
  jss.setup(preset())

  const styles = {
    "@global": {
      "body": {
        color: colors.black,
        fontFamily: "Helvetica, Arial, sans-serif",
        margin: 0
      }
    }
  }

  jss.createStyleSheet(styles).attach()
}

export default GlobalStyles
