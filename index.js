// server.js
const express = require('express');
const app = express();

// Set the Port to use either the environment variable (for Render) or a fallback (for local)
const PORT = process.env.PORT || 3000; 

// Route Handler for the main path /
app.get('/', (req, res) => {
    // Define the full HTML content to be sent
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World Server</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: sans-serif;
                    background-color: #f0f0f0;
                }
                h1 {
                    color: #333;
                    border: 2px solid #333;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <h1>Hello World Page from Node.js Server!</h1>
        </body>
        </html>
    `;
    
    // Use res.send to send the HTML string. Express automatically sets the Content-Type to text/html.
    res.send(htmlContent);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});