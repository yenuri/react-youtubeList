import Editor from './Editor'
import React, { useReducer, useRef, useState } from 'react'
import { Box } from '@mui/material'
import YoutubeList from './YoutubeList'
import { listInitialState, listReducer } from '../store/reducer'

const ListContext = React.createContext(undefined)
const ListProvider = (props: any) => {
    const [state, dispatch] = useReducer(listReducer, listInitialState)
    return <ListContext.Provider value={[state, dispatch]} {...props} />
}

export const useList = (): any => {
    const context = React.useContext(ListContext)
    if (!context) {
        throw 'useList must be used within a ListProvider'
    }
    return context
}

const MainPage = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                border: '1px solid red',
                margin: '0 auto',
                width: '300px',
                textAlign: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <ListProvider>
                <Editor />
                <YoutubeList />
            </ListProvider>
        </Box>
    )
}

export default MainPage
