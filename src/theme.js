import { indigo, deepPurple } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: indigo,
        secondary: deepPurple
    }
})

export default theme;