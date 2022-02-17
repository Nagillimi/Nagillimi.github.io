import * as React from 'react';
import {
    AppBar,
    Button,
    IconButton,
    Input,
    InputAdornment,
    InputBase,
    Menu,
    MenuItem,
    MenuList,
    OutlinedInput,
    Tab,
    Tabs,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import { Search } from "@mui/icons-material"
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * 
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
    >
        <Menu />
    </IconButton>
 */

export function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (event) => {
      setAnchorEl(null);
    };

    return (
        <BrowserRouter>
            <Helmet defaultTitle="BenMilligan">
            </Helmet>

            <AppBar 
                position="static"
                color='transparent'
            >
                <Toolbar>
                    <Button
                        id="biomedical-projects-button"
                        onClick={handleClick}
                        style={{
                            width: 300,
                            color: 'midnightblue',
                            fontSize: 18,
                            textTransform: 'none',
                        }}
                    >
                        Biomedical Projects
                    </Button>
                    <Menu
                        id="biomedical-projects"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        // style={{marginLeft: 200}}
                    >
                        <MenuItem>
                            Gestural Glove
                        </MenuItem>
                        <MenuItem>
                            TBD
                        </MenuItem>
                        <MenuItem>
                            TBD
                        </MenuItem>
                    </Menu>

                    <Button
                        id="personal-projects-button"
                        onClick={handleClick}
                        style={{
                            width: 300,
                            color: 'midnightblue',
                            fontSize: 18,
                            textTransform: 'none',
                        }}
                    >
                        Personal Projects
                    </Button>
                    <Menu
                        id="personal-projects"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem style={{width:300}} onClick={()=>{alert('suh')}}>
                            Homemade 3D Printer
                        </MenuItem>
                        <MenuItem>
                            TBD
                        </MenuItem>
                        <MenuItem>
                            TBD
                        </MenuItem>
                    </Menu>
                    <Input
                        id="search-nav"
                        placeholder="Search"
                        size='small'
                        style={{
                            width: 300,
                            color:'midnightblue'
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={()=>{}}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Toolbar>
            </AppBar>
        </BrowserRouter>
    );
}
