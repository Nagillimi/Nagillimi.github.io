/**
 * transition link => https://developer.mozilla.org/en-US/docs/Web/CSS/transition
 */

import * as React from 'react';
import { Paper } from "@mui/material";
import { Link } from 'gatsby';
//@ts-ignore
import githubLogo from '../../static/images/github-black.png';
import { Box } from '@mui/system';

interface Props {
    /** Project picture */
    picture: any;
    /** Project header */
    header: string;
    /** Small project description */
    description: string;
    /** optional picture height */
    pictureHeight?: number;
    /** optional paper color */
    paperColor?: string;
    /** optional paper margin left */
    paperMarginLeft?: number;
    /** Project github link */
    githubUrl?: string;
}

export const ProjectCard = (props: Props) => {
    const [mouseOver, setMouseOver] = React.useState(false);
    const pictureHeight = props.pictureHeight || 300;

    const pictureStyle: React.CSSProperties = {
        height: pictureHeight,
        transform: mouseOver ? 'scale(1.1)' : 'none',
        transformOrigin: 'center',
        transition: 'all 0.25s ease-in-out',
    };
    const paperStyle: React.CSSProperties = {
        backgroundColor: props.paperColor || 'white',
        height: pictureHeight/2,
        width: 2*window.innerWidth/3,
        position: 'absolute',
        marginTop: -(3*pictureHeight/4),
        marginLeft: props.paperMarginLeft || 150,
    };
    const headerStyle: React.CSSProperties = {
        fontStyle: 'italic',
        fontSize: 24,
    };
    const descriptionStyle: React.CSSProperties = {
        fontSize: 18,
    };
    const githubPictureStyle: React.CSSProperties = {
        height: 20,
    };
    
    return (
        <Box
            onMouseLeave={() => setMouseOver(false)}
            // style={mouseOver
            //     ? {backgroundColor: 'lightgrey'}
            //     : {backgroundColor: 'white'}
            // }
        >
            <Link to="/projects">
                <img
                    onMouseLeave={() => setMouseOver(false)}
                    onMouseOver={() => setMouseOver(true)}
                    style={pictureStyle}
                    src={props.picture}
                />
            </Link>
            <Paper
                onMouseLeave={() => setMouseOver(true)}
                onMouseOver={() => setMouseOver(false)}
                style={paperStyle}
                elevation={24}
            >
                <div
                    onMouseLeave={() => setMouseOver(!mouseOver)}
                    onMouseOver={() => setMouseOver(!mouseOver)}
                    style={{margin: 10}}
                >
                    <h2 style={headerStyle}>{props.header}</h2>
                    <p style={descriptionStyle}>{props.description}</p>
                    {props.githubUrl
                        ?
                            <a
                                href={props.githubUrl}
                            >
                                <img
                                    style={githubPictureStyle}
                                    src={githubLogo}
                                />
                            </a>
                        :
                            null
                    }
                    
                </div>
            </Paper>
        </Box>
    )
}
