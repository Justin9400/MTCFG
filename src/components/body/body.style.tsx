import { IStyle } from '@fluentui/react'

type IBodyStyles = {
  bodyStack: IStyle
}

export const getBodyStyles = (): IBodyStyles => {
  return {
    bodyStack: {
      display: 'flex',
      width: '100%',
      height: '100%'
    }
  }
}
