/**
 * Color codes: https://htmlcolorcodes.com/
 */
import * as React from "react";
import { ResponsiveAppBar } from "../components/appBar";
import { InsertPictureAsBox } from "../components/picture";
import Image from 'material-ui-image';

// single page app
const IndexPage = () => {
    return (
        <main>
            <ResponsiveAppBar />
            <Image  
                // height={400}
                // width={600}
                src={"/static/images/icon.png"}
            />
        </main>
    )
}

export default IndexPage
