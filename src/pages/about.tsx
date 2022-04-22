import { Typography } from "@mui/material";
import * as React from "react";
import { ResponsiveAppBar } from "../components/appBar";
import { GlobalStyle } from "../styles/globalStyle";

export default function about() {
    return (
        <main>
            <ResponsiveAppBar />
            <Typography>I'm pretty cool</Typography>
            <GlobalStyle />
        </main>
    );
}
