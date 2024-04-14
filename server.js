const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    let filePath = '';

    // Serve index.html for all routes
    if (req.url === '/') {
        filePath = path.join(__dirname, 'build', 'index.html');
    } else {
        // Serve other static files (like JavaScript, CSS, images) from the build directory
        filePath = path.join(__dirname, 'build', req.url);
    }

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }

        // Read the file and serve it
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }

            // Set appropriate content type based on file extension
            const extname = path.extname(filePath);
            let contentType = 'text/html';
            switch (extname) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                // Add cases for other file types as needed
            }

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
}).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
