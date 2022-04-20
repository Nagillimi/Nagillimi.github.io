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
    Link,
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
//@ts-ignore
import banner from '../../static/images/banner.jpg';

const useStyles = makeStyles(theme => ({
    appBarImage: {
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundClip: "padding-box",
        backgroundSize: "100%",
        backgroundPosition: 'center',
        height: 150,
    },
    tab: {
        
    },
}));

const pages = [
    'Projects',
    'About',
    'Contact'
];
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
export const ResponsiveAppBar = () => {
    const classes = useStyles();
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    interface LinkTabProps {
        label?: string;
        href?: string;
    }

    function LinkTab(props: LinkTabProps) {
        return (
            <Tab
                component='a'
                // disableRipple
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }

    return (
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
                    height={150}
                >
                    <Grid item>
                        <LinkTab label='Projects' href='/projects'/>
                    </Grid>
                    <Grid item>
                        <LinkTab label='About' href='/about-me'/>
                    </Grid>
                    <Grid item>
                        <LinkTab label='Contact' href='/contact'/>
                    </Grid>
                </Grid>
            </Tabs>
        </AppBar>
    );
}
