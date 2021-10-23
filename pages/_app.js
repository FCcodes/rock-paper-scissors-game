import '../styles/globals.css'

//material-ui
import { ThemeProvider } from '@mui/material/styles'

//gameState
import GameState from '../components/GameState'

//lib
import theme from '../lib/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GameState>
        <Component {...pageProps} />
      </GameState>
    </ThemeProvider>
  )
}

export default MyApp
