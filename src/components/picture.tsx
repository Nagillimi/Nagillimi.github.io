import * as React from 'react';
import { Box, Paper } from "@mui/material";

interface Props {
    /** Source to the image */
    src: string;
    /** Height of the image in pixels */
    height: number;
    /** Width of the image in pixels */
    width: number;
}

export const InsertPictureAsBox = (props: Props) => {
    return (
        // <Box
        //     component={"img"}
        //     sx={{
        //         height: props.height,
        //         width: props.width,
        //     }}
        //     // alt={props.alt}
        //     src={props.src}
        // />
        
        <Paper variant="outlined">
            <img src={props.src}/>
        </Paper>
    )
}
