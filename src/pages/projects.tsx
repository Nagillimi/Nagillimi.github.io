import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { ResponsiveAppBar } from "../components/appBar";
import { ProjectCard } from "../components/projectCard";
import { GlobalStyle } from "../styles/globalStyle";
//@ts-ignore
import printer from '../../static/images/printer.jpg';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    projectGrid: {
        margin: 20,
    },
    headerStyle: {
        fontStyle: 'italic',
        fontSize: 32,
    },
    
}));

export default function projects() {
    const classes = useStyles();
    return (
        <main>
            <ResponsiveAppBar />
            <Grid
                container
                direction='column'
                className={classes.projectGrid}
            >
                <h2 className={classes.headerStyle}>Projects</h2>
                <Grid item>
                    <ProjectCard
                        picture={printer}
                        header="Homemade 3D Printer"
                        description="Pretty wild"
                        paperColor="lightblue"
                        pictureHeight={400}
                        paperMarginLeft={250}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        picture={printer}
                        header="Homemade 3D Printer"
                        description="Pretty wild"
                        paperColor="lightblue"
                        pictureHeight={400}
                        paperMarginLeft={250}
                    />
                </Grid>
                <Grid item>
                    <ProjectCard
                        picture={printer}
                        header="Homemade 3D Printer"
                        description="Pretty wild"
                        paperColor="lightblue"
                        pictureHeight={400}
                        paperMarginLeft={250}
                    />
                </Grid>
                
            </Grid>

            
            <GlobalStyle />
        </main>
    );
}
