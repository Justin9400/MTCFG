import { Stack, Image, IStackTokens, DefaultButton, DetailsList, List, IColumn, SelectionMode } from "@fluentui/react"
import { getBodyStyles } from "./body.style"
import logo from '../../mtg-logo.png'

export const Body = () => {
    const componentStyles = getBodyStyles()
    const stackTokens: IStackTokens = { childrenGap: 15 };
    const onLogoClick = () => {}

    const columns: IColumn[] = [
        { key: 'rank', name: 'Rank', fieldName: 'rank', minWidth: 50, maxWidth: 50 },
        { key: 'name', name: 'Name', fieldName: 'name', minWidth: 50, maxWidth: 100 },
        { key: 'ratio', name: 'W/L', fieldName: 'ratio', minWidth: 50, maxWidth: 100 },
        { key: 'wins', name: 'Wins', fieldName: 'wins', minWidth: 50, maxWidth: 100 },
        { key: 'losses', name: 'Losses', fieldName: 'losses', minWidth: 50, maxWidth: 100 },
        { key: 'games played', name: 'Games played', fieldName: 'games player', minWidth: 100, maxWidth: 100 },
    ];

    const items = [
        { key: '1', name: 'John', age: 30 },
        { key: '2', name: 'Alice', age: 25 },
        { key: '3', name: 'Bob', age: 35 },
    ];

    return (
        <Stack horizontal horizontalAlign="center" styles={{root:{width: '100%'}}} tokens={stackTokens}>
            <Stack horizontal verticalAlign="center" className={componentStyles.bodyStack?.toString()} tokens={stackTokens}>
                <DetailsList
                    items={items}
                    columns={columns}
                    selectionMode={SelectionMode.none} 
                />
            </Stack>
        </Stack>
    )
}