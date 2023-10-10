import { Stack, Image, IStackTokens, DefaultButton } from "@fluentui/react"
import { getFooterStyles } from "./footer.style"
import logo from '../../mtg-logo.png'

export const Footer = () => {
    const componentStyles = getFooterStyles()
    const stackTokens: IStackTokens = { childrenGap: 15 };
    const onLogoClick = () => {}

    return (
        <Stack horizontal horizontalAlign="center" styles={{root:{ marginTop: 'auto', width: '100%' }}}>
            <Stack horizontal verticalAlign="center">
                <h1>Justin Kachornvanich</h1>
            </Stack>
        </Stack>
    )
}