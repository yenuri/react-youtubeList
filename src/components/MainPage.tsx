import Editor from './Editor'
import { useReducer, useRef, useState } from 'react'
import { YoutubeItem } from '../types/youtubeItem'
import {
    IconButton,
    ListItem,
    List,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Box,
    ListItemSecondaryAction,
} from '@mui/material'
import { Delete, Edit, Folder } from '@mui/icons-material'
import YoutubeList from './YoutubeList'
import { listInitialState, listReducer } from '../store/reducer'

const MainPage = () => {
    const [state, dispatch] = useReducer(listReducer, listInitialState)
    const { list, entryToUpdate } = state

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
            <Editor entryToUpdate={entryToUpdate} dispatch={dispatch} />
            <YoutubeList list={list} dispatch={dispatch} />
        </Box>
    )
}

export default MainPage
