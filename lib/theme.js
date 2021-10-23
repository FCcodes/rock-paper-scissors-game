import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({

    breakpoints: {
        values: {
            phone: 0,
            tablet: 500,
            laptop: 980,
            desktop: 1300
        }
    },

    palette: {
        primary: {
            main: "rgb(0, 0, 0)"
        }
    },

    typography: {

        h1: {
            fontSize: '3rem',            
        },

        h3: {
            fontSize: '1.5rem'
        }

    }

})

theme = responsiveFontSizes(theme)



export default theme