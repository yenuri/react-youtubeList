import { YoutubeItem } from '../types/youtubeItem'
import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
} from '@mui/material'
import { Delete, Edit, Folder } from '@mui/icons-material'
import { Dispatch, useCallback, useState } from 'react'
import YoutubeListItem from './YoutubeListItem'

interface youtubeListProps {
    list: YoutubeItem[]
    dispatch: Dispatch<any>
}

const YoutubeList: React.FC<youtubeListProps> = ({ list, dispatch }) => {
    return (
        <List dense>
            {list.map((listEntry) => {
                return (
                    <YoutubeListItem listItem={listEntry} dispatch={dispatch} />
                )
            })}
        </List>
    )
}

export default YoutubeList
