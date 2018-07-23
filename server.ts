import 'zone.js/dist/zone-node';
import 'reflect-metadata';

(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { join } from 'path';

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const APP_NAME = 'base6';

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist/${APP_NAME}-server/main`);

enableProdMode();

const app = express();

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');

app.get('/**/*', (req, res) => {
  res.render(join(DIST_FOLDER, APP_NAME, 'index'), {
    req,
    res
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, APP_NAME));

app.get('*.*', express.static(join(DIST_FOLDER, APP_NAME)));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});