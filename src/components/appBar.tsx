import { Link } from "gatsby";
import { TabUnstyled } from '@mui/base';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
    Typography
}
from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
//@ts-ignore
import banner from '../../static/images/banner2.jpg';

/**
 * The height of the banner in pixels
 */
const BANNER_HEIGHT_PX = 150;

const useStyles = makeStyles(theme => ({
    primary: {
        color: "white",
    },
    appBarImage: {
        backgroundPositionY: "0%",
        backgroundClip: "content-box",
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "1000px 200px",
        backgroundPosition: 'center',
        zoom: "reset",
        height: BANNER_HEIGHT_PX
    },
    grid: {
        borderColor: "black",
        // borderStyle: "dashed",
    },
    tabLabel: {
        
        color: "ghostwhite",
        fontSize: 24,
        textTransform: "none",
        // fontFamily: "Serif",
        marginBottom: -4,
    },
    link: {
        color: "white",
        textDecoration: "none"
    },
}));

const projects = [
    'RepRap 3D Printer - MK2 Prusa Clone',
    'Solder Fume Extractor',
    'EMG Filtering',
    'EEG Filtering',
    'Seat Pressure Mapping',
    'Gait Algorithm Analysis under a Linear Impulse',
];

/**
 * 
 * @returns The page-wide responsive app-bar
 */
export function ResponsiveAppBar() {
    const classes = useStyles();
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
        <BrowserRouter>
            <AppBar
                position="sticky"
                className={classes.appBarImage}
            >
                <Tabs value={value} onChange={handleChange} aria-label="nav-tabs">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-end"
                        height={BANNER_HEIGHT_PX}
                    >
                        <Grid item className={classes.grid}>
                            <Link to="/Projects" replace className={classes.link}>
                                <Tab
                                    label={
                                        <span className={classes.tabLabel}>
                                            Projects
                                        </span>
                                    }
                                    className={classes.tabLabel}
                                />
                            </Link>
                        </Grid>
                        <Grid item className={classes.grid}>
                            <Link to="/AboutMe" className={classes.link}>
                                <Tab
                                    label={
                                        <span className={classes.tabLabel}>
                                            About Me
                                        </span>
                                    }
                                    className={classes.tabLabel}
                                />
                            </Link>
                        </Grid>
                        <Grid item className={classes.grid}>
                            <Link to="/Contact" className={classes.link}>
                                <Tab
                                    label={
                                        <span className={classes.tabLabel}>
                                            Contact
                                        </span>
                                    }
                                    className={classes.tabLabel}
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Tabs>
            </AppBar>                

        </BrowserRouter>
    );
}
