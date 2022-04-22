import { Typography } from "@mui/material";
import * as React from "react";
import { ResponsiveAppBar } from "../components/appBar";
import { GlobalStyle } from "../styles/globalStyle";

export default function contact() {
    return (
        <main>
            <ResponsiveAppBar />
            <Typography>Contact Me PLEASE</Typography>
            <GlobalStyle />
        </main>
    );
}
