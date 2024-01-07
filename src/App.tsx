/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function App () {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
    <CyclesContextProvider>
        <Router />
    </CyclesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
