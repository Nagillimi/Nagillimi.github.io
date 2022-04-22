/**
 * Notes:
 * - Color codes: https://htmlcolorcodes.com/
 */

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import * as React from "react";
import { ResponsiveAppBar } from "../components/appBar";
import { GlobalStyle } from "../styles/globalStyle";

/** All pictures, require ts-ignore */

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#000000",
        },
    }
})

// single page app
export default function IndexPage() {
    return (
        <main>
            <ThemeProvider theme={theme}>
                <ResponsiveAppBar />
                <GlobalStyle />
            </ThemeProvider>
        </main>
    )
}
