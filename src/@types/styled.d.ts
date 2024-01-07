/* eslint-disable @typescript-eslint/consistent-type-imports */
import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// sobrescrevendo a tipagem de uma biblioteca existente
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
