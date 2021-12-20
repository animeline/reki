import 'dotenv-defaults/config';

import express from 'express';

const app = express();

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log('api started'));
