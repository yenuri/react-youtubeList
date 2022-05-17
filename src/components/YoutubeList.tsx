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
import {useCallback, useState} from 'react'
import YoutubeListItem from './YoutubeListItem'

interface youtubeListProps {
    list: YoutubeItem[]
    onDelete: (deletePayload: YoutubeItem) => void
    onUpdate: (updatePayload: YoutubeItem) => void
}

const YoutubeList: React.FC<youtubeListProps> = ({
    list,
    onDelete,
    onUpdate,
}) => {

    const onUpdatePastThroughMemorized = useCallback((item: YoutubeItem) => {
        onUpdate(item)
    },[onUpdate])
    return (
        <List dense>
            {list.map((listEntry) => {
                return (
                    <YoutubeListItem
                        listItem={listEntry}
                        onDelete={onDelete}
                        onUpdate={onUpdatePastThroughMemorized}
                    />
                )
            })}
        </List>
    )
}

export default YoutubeList