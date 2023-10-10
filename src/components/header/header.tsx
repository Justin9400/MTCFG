import { Stack, Image, IStackTokens, DefaultButton } from "@fluentui/react"
import { getHeaderStyles } from "./header.style"
import logo from '../../mtg-logo.png'

export const Header = () => {
    const componentStyles = getHeaderStyles()
    const stackTokens: IStackTokens = { childrenGap: 15 };
    const onLogoClick = () => {}

    return (
        <Stack horizontal horizontalAlign="center" className={componentStyles.headerStack?.toString()} tokens={stackTokens}>
            {/* <Link onClick={onLogoClick}> */}
                <Image src={logo} styles={{root: {padding: '15px 0px 15px 50px'}}} height={'50px'}/>
            {/* </Link> */}
            <Stack horizontal verticalAlign="center" className={componentStyles.headerStack?.toString()} tokens={stackTokens}>
                <DefaultButton
                    data-automation-id="test"
                    allowDisabledFocus={true}
                    text="Leaderboard"
                    onClick={() => {}}
                    styles={{root: {border: 'none'}}}
                />
                <DefaultButton
                    data-automation-id="test"
                    allowDisabledFocus={true}
                    text="Game History"
                    onClick={() => {}}
                    styles={{root: {border: 'none'}}}
                />
                <DefaultButton
                    data-automation-id="test"
                    allowDisabledFocus={true}
                    text="All Time Stats"
                    onClick={() => {}}
                    styles={{root: {border: 'none'}}}
                />
            </Stack>
        </Stack>
    )
}