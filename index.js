const server = require( './server' );
const config = require( './config' );

const { PORT } = config;

server.listen(PORT, () => {
    console.log(
        `\n************************************************************
         \n\t\tServer Running on port:${PORT}
         \n************************************************************`
    )
});