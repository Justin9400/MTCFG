import { IStyle } from '@fluentui/react'

type IFooterStyles = {
    footerStack: IStyle
}

export const getFooterStyles = (): IFooterStyles => {
  return {
    footerStack: {
      display: 'flex',
      marginTop: 'auto',
      width: '100%',
      height: '0%'
    }
  }
}
