
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelmetProvider } from "react-helmet-async";
import { App } from './app';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <HelmetProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </HelmetProvider>,
    MOUNT_NODE,
);
