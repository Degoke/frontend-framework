import http from "http";
import fs from "fs";
import path from "path";

const PORT = 8080;
console.log(path.resolve(__dirname));

http.createServer((request, response) => {
    console.log("request Url: ", request.url)
    switch(request.url) {
        case "/index.js":
            fs.readFile(`${path.resolve(__dirname)}/index.js`, (err, html) => {
                if(err) {
                    console.error(request.url, "---", 400)
                    console.error(err)
                    response.writeHead(400);
                    response.end();
                } else {
                    console.info(request.url, "---", 200)
                    response.writeHead(200, {"Content-Type": "text/javascript"});
                    response.write(html);
                    response.end();
                }
            })
            break
        default:
            fs.readFile(`${path.resolve(__dirname)}/index.html`, (err, html) => {
                if(err) {
                    console.error(request.url, "---", 400)
                    console.error(err)
                    response.writeHead(400);
                    response.end();
                } else {
                    console.info(request.url, "---", 200)
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(html);
                    response.end();
                }
            })
            break
    }
    
}).listen(PORT);

console.info("Server listeneing on port:" + PORT)