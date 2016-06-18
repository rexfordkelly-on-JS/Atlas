import path from 'path';
import express from 'express';
import settings from 'server/settings';

import mainRoute from './routes/main';

const app = express();

const buildDir = '/build';
const staticDir = path.join(settings.APP_HOME, buildDir);

app.use(express.static( path.join(__dirname, '/../../http_public')));
app.use('/static', express.static(staticDir));

app.use('/', mainRoute);

export default app;
