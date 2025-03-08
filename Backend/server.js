const http = require("http");
const app = require("./app");
const port = process.env.PORT || 4000; // Fallback to 4000 if PORT isn’t set

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
