import { Box, Button, TextField } from '@mui/material'
import {useEffect, useMemo, useState} from 'react'
import { YoutubeItem } from '../types/youtubeItem'
import { v4 as uuidv4 } from 'uuid'

const blackList = ['demo', 'test']

interface editorProps {
    onSubmit: (submittedEntry: YoutubeItem) => void
    entryToUpdate?: YoutubeItem
}

const Editor: React.FC<editorProps> = ({ onSubmit, entryToUpdate }) => {
    const [videoName, setVideoName] = useState('')
    const [videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
        if(!entryToUpdate) return
        setVideoName(entryToUpdate.videoName)
        setVideoUrl(entryToUpdate.videoUrl)
    }, [entryToUpdate])

    const handleSubmit = () => {
        const payload: YoutubeItem = entryToUpdate
            ? { videoName, videoUrl, id: entryToUpdate.id }
            : { videoName, videoUrl, id: uuidv4() }
        onSubmit(payload)
        setVideoName('')
        setVideoUrl('')
    }

    const reverseUrl = useMemo(() => {
        if(!videoUrl) return ''
        // @ts-ignore
        return [...videoUrl].reverse().join()
    },[videoUrl])

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                border: '1 px solid red',
                textAlign: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="video-name"
                    label="video name"
                    variant="outlined"
                    value={videoName}
                    onChange={(e) => setVideoName(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="video-url"
                    label="video url"
                    variant="outlined"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                />
            </div>
            <div>
                <Button variant="contained" onClick={handleSubmit}>
                    {!entryToUpdate ? 'Create Entry' : 'Update Entry'}
                </Button>
            </div>

            <div>
                <Button variant="contained">
                    {reverseUrl}
                </Button>
            </div>
        </Box>
    )
}

export default Editor
