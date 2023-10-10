import { IStyle } from '@fluentui/react'

type IHeaderStyles = {
    headerStack: IStyle
    logo: IStyle
}

export const getHeaderStyles = (): IHeaderStyles => {
  return {
    headerStack: {
      display: 'flex',
      width: '100%',
      height: '0%'
    },
    logo: {
      paddingTop: '15px 0px 15px 50px',
      height: '0px'
    }
  }
}
