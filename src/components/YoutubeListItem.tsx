import { YoutubeItem } from '../types/youtubeItem'
import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
} from '@mui/material'
import { Delete, Edit, Folder } from '@mui/icons-material'
import {getThumbnail} from "../types/utils";

interface itemProps {
    listItem: YoutubeItem
    onDelete: (deletePayload: YoutubeItem) => void
    onUpdate: (updatePayload: YoutubeItem) => void
}

const YoutubeListItem: React.FC<itemProps> = ({
    listItem,
    onDelete,
    onUpdate,
}) => {
    return (
        <ListItem key={listItem.id}>
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onDelete(listItem)}
                >
                    <Delete />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onUpdate(listItem)}
                >
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>

            <ListItemAvatar>
                <Avatar src={getThumbnail(listItem.videoUrl)}>
                    {getThumbnail(listItem.videoUrl) ? (
                        listItem.videoName.slice(0, 1)
                    ) : (
                        <Folder />
                    )}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={listItem.videoName} />
        </ListItem>
    )
}

export default YoutubeListItem
