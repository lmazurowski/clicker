import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    toolbarColor: string
    
    colors: {
      main: string
      secondary: string
    }
  }
}
