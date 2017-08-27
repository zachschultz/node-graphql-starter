# Running locally
Make sure you have a database created and running (PostgreSQL) and adjust the config files in `src/config` to properly match

Run `npm start` and then point your browser to `localhost:9000/graphql`

`npm run build` will run babel and create a `dist/` directory with all of the JS babel-ified

`npm run serve` will actually serve up the server created in `dist/`
