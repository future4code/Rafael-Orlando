import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor , secondColor , neutralColor} from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText : "white",
    },
    secondary: {
      main: secondColor,
      contrastText : "black",
    },
    text: {
        primary : neutralColor
    }
  }
})

export default theme