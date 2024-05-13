import { readFileSync } from 'fs';
import path from 'path';

const App = readFileSync(path.join(__dirname, '../../graphql/app.graphql'), {
  encoding: 'utf-8',
});

const TYPE_DEFS = [App]; // Arrange all gql type definitions

export default TYPE_DEFS;
