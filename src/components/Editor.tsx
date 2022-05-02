import { Box, Button, TextField } from '@mui/material'
import { YoutubeItem } from '../types/youtubeItem'

const handleSubmit = (entry: YoutubeItem) => {
    console.log(entry)
}
const Editor = () => {
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
                />
            </div>
            <div>
                <TextField
                    id="video-url"
                    label="video url"
                    variant="outlined"
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={() =>
                        handleSubmit({
                            videoName: (
                                document.getElementById('video-name') as any
                            ).value,
                            videoUrl: (
                                document.getElementById('video-url') as any
                            ).value,
                        })
                    }
                >
                    Create Entry 
                </Button>
            </div>
        </Box>
    )
}

export default Editor
