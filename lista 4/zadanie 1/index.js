const http = require('http');
const fs = require('fs');

http.createServer(function(request_, response_)
{
    switch (request_.url)
    {
        case '/index.html':
            response_.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('index.html', 'utf-8', function(error_, data)
            {
                if(error_) throw error_;
                response_.write(data);
                return response_.end();
            });
            break;

        case '/podstrona1.html':
            response_.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('podstrona1.html', 'utf-8', function(error_, data)
            {
                if(error_) throw error_;
                response_.write(data);
                return response_.end();
            });
            break;

        case '/podstrona2.html':
            response_.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('podstrona2.html', 'utf-8', function(error_, data)
            {
                if(error_) throw error_;
                response_.write(data);
                return response_.end();
            });
            break;

        case '/podstrona3.html':
            response_.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('podstrona3.html', 'utf-8', function(error_, data)
            {
                if(error_) throw error_;
                response_.write(data);
                return response_.end();
            });
            break;

        case '/pdf.pdf':
            response_.writeHead(200, { 'Content-Type': 'application/pdf' });
            response_.write(fs.readFileSync('pdf.pdf'));
            response_.end();
            break;

        case '/image.jpg':
            response_.writeHead(200, { 'Content-Type': 'image/jpg' });
            response_.write(fs.readFileSync('image.jpg'));
            response_.end();
            break;

        default:
            response_.writeHead(404, { 'Content-Type': 'text/html' });
            response_.end('Error 404');
            break;
    }
}).listen(8080);
