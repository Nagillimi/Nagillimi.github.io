import { Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { ResponsiveAppBar } from "../components/appBar";
import { GlobalStyle } from "../styles/globalStyle";
//@ts-ignore
import profile from '../../static/images/profile.jpg';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    pageDivStyle: {
        margin: 20,
    },
    profileStyle: {
        borderColor: 'navy',
        borderStyle: 'solid',
        resize: 'horizontal',
    },
    headerStyle: {
        fontStyle: 'italic',
        fontSize: 32,
    },
    paragraphStyle: {
        fontSize: 20,
    
    },
}));

export default function about() {
    const classes = useStyles();

    return (
        <main>
            <ResponsiveAppBar />
            <Grid
                container
                direction="column"
                className={classes.pageDivStyle}
            >
                <Grid item>
                    <Grid
                        container
                        direction="row" spacing={1}
                    >
                        <Grid item>
                            <img src={profile} className={classes.profileStyle}/>
                        </Grid>
                        <Grid item>
                            <Paper elevation={2}>
                                <h2 className={classes.headerStyle}>Hi!</h2>
                                <p
                                    className={classes.paragraphStyle}
                                    title="leadingParagraph"
                                >
                                    I'm a Canadian Software Engineer who focuses in algorithm design, sensors, signal processing, and robotics.
                                    I have a background in Mechatronics & Biomedical Engineering and like my software trajectory, I'm always
                                    learning new ways to combine the two- and I'm not afraid of specializing in something new!
                                    <br/>
                                    <br/>
                                    I love tackling ambitious problems not just in my work, but also in personal hobbies since I value the skills
                                    I learn along the way far higher than the simple payout to "buy" a similar product on the market. This is
                                    somewhat evident when you look through my projects since I start with the useful engineering tools first -
                                    variable voltage supply, 3D printer, fume extractor, etc.
                                </p>     
                            </Paper>                   
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <h2 className={classes.headerStyle}>Career</h2>
                    <p
                        className={classes.paragraphStyle}
                        title="careerParagraph"
                    >
                        I started off as a Mechanical Designer for Siemens Canada where I learned a majority of my formal engineering design elements
                        like revision control, verification and validation, engineering standards, and effective ways of communication across a
                        multidisciplinary team. These were all co-op positions from my time at the University of Waterloo and they put me on a rock-solid
                        path for a mechanical engineering career.
                        <br/>
                        <br/>
                        After transferring to the University of Guelph, I essentially restarted my degree and took courses in the biomedical field, with
                        a goal of finishing as a biomedical engineer. Through all my earlier robotics and mechanical education, I had missed the human
                        component and the impact technology could have on human lives directly. Funny enough, by the end I focused in the more robotic
                        and technological side of my degree- being biomedical signal processing of ECG, EEG, EMG, etc. During my time at Guelph, I volunteered
                        and  interned at the Biomechanics lab where I learned anatomical algorithm design, wearable sensor signal processing, and practical
                        research methods. After graduating, I realized that my distinguished degree in signal processing could be strategically combined with
                        my robotics background to cover exciting fields of algorithm design, instead of my earlier mechanical path.
                        <br/>
                        <br/>
                        My current position as a Software engineer covers all ends of a wearable system, from sensor acquisition hardware and firmware,
                        real-time signal processing, novel anatomical algorithms and sensor fusion, and mechanical design and assembly.
                    </p>
                </Grid>
                <Grid item>
                    <h2 className={classes.headerStyle}>Non-Technical</h2>
                    <p
                        className={classes.paragraphStyle}
                        title="careerParagraph"
                    >
                        For a year at Guelph I was a varsity rowing athlete but right now I train at a much lower intensity with cycling, running and
                        erging. I love hiking, camping, and heading out on canoe trips any chance I can get!
                    </p>
                </Grid>
            </Grid>
            <GlobalStyle />
        </main>
    );
}
