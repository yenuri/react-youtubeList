import { Box, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { YoutubeItem } from '../types/youtubeItem'

const blackList = ['demo', 'test']

interface editorProps {
    onSubmit: (submittedEntry: YoutubeItem) => void
}

const Editor: React.FC<editorProps> = ({ onSubmit }) => {
    const [videoName, setVideoName] = useState('')
    const [videoUrl, setVideoUrl] = useState('')

    /*useEffect(() => {
        if (!videoName) return
        if (blackList.some((e) => videoName == e)) {
            setVideoName('')
        }
    }, [videoName])*/

    const handleSubmit = () => {
        onSubmit({ videoName, videoUrl })
        setVideoName('')
        setVideoUrl('')
    }

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
                    Create Entry
                </Button>
            </div>
        </Box>
    )
}

export default Editor
