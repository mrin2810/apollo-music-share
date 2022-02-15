import { green, red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: green,
        secondary: red
    }
})

export default theme;