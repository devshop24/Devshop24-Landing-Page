const server = require( './server' );
const config = require( './config' );

const { port } = config;

server.listen(port, () => {
    console.log(
        `\n************************************************************
         \n\t\tServer Running on port:${port}
         \n************************************************************`
    )
});