import React from 'react';
import ReactDOMServer from 'react-dom/server';
import html from '../html';

import App from '../client/App';

export default async() => {
    const body = ReactDOMServer.renderToString(React.createElement(App));
    return html({
        body
    });
};