import express from 'express';
import GraphHTTP from 'express-graphql';

import Schema from './schema';
import Db from './models';

const PORT = 9000;
const app = express();

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
