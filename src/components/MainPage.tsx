import Editor from './Editor'
import { useState } from 'react'
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

const MainPage = () => {
    const [list, updateList] = useState<YoutubeItem[]>([])
    console.log(list)

    const handleSave = (newEntry: YoutubeItem) => {
        const newList = list.concat(newEntry)
        updateList(newList)
    }

    const handleDelete = (entryToRemove: YoutubeItem) => {
        const newList = list.filter(
            (entry) => entryToRemove.videoName != entry.videoName
        )
        updateList(newList)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                border: '1 px solid blue',
                width: '300 px',
                textAlign: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <Editor onSubmit={handleSave} />
            <List dense>
                {list.map((listEntry) => {
                    return (
                        <ListItem>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <Delete
                                        onClick={() => handleDelete(listEntry)}
                                    />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <Edit />
                                </IconButton>
                            </ListItemSecondaryAction>

                            <ListItemAvatar>
                                <Avatar>
                                    <Folder />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={listEntry.videoName} />
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default MainPage
