const express = require('express');
const next = require('next');
const helmet = require('helmet');
const fs = require('fs');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
const moment = require('moment-timezone');

const cors = require('cors');
const AWSXRay = require('aws-xray-sdk');

const dev = process.env.NODE_ENV === 'development';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

global.appRoot = path.join(__dirname);
dotenv.config({ path: path.join(__dirname, `envs/.env.${process.env.TARGET_ENV}`) });

const corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

console.log('┌───────────────── ENVIRONMENT VARIABLES ─────────────────┐');
console.log('    process.env.NODE_ENV', process.env.NODE_ENV);
console.log('    process.env.TARGET_ENV', process.env.TARGET_ENV);
console.log('    process.env.API_URL', process.env.API_URL);
console.log('    process.env.X_API_KEY', process.env.X_API_KEY);
console.log('    process.env.NEXT_PUBLIC_S3_URL', process.env.NEXT_PUBLIC_S3_URL);
console.log('    process.env.REDIS_HOST', process.env.REDIS_HOST);
console.log('    process.env.REDIS_PORT', process.env.REDIS_PORT);
console.log('    process.env.REDIS_DATABASE', process.env.REDIS_DATABASE);
console.log('└─────────────────────────────────────────────────────────┘');

app.prepare().then(() => {
  const server = express();
  server.disable('x-powered-by');
  server.use(
    helmet.frameguard({
      action: 'deny',
    }),
  );
  server.use(helmet.xssFilter());
  server.use(cookieParser()); // process.env.COOKIE_SECRET

  // setup access log start
  const logPath = dev ? path.join(__dirname, '/logs') : '/data/logs/node';

  const isExists = fs.existsSync(logPath);
  if (!isExists) {
    fs.mkdirSync(logPath, { recursive: true });
  }

  morgan.token('date', (req, res, tz) => {
    return moment().tz(tz).format('YYYY-MM-DD HH:mm:ss');
  });

  morgan.format(
    'accessLogFormat',
    ':remote-addr - :remote-user [:date[Asia/Seoul]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms',
  );

  server.use(
    morgan('accessLogFormat', {
      skip: (req, res) => req.url.indexOf('/static/') > -1,
      stream: fs.createWriteStream(`${logPath}/access.log`, { flags: 'a' }),
    }),
  );
  // setup access log end

  server.use(cors(corsOptions));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(express.static(path.join(__dirname, 'public')));
  server.enable('trust proxy');
  server.use(AWSXRay.express.openSegment('APCP_FE'));

  //setup server timed out
  // server.use(function (req, res, next) {
  //   res.setTimeout(60000, function () {
  //     console.log(`[${moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')}] Request has timed out >>> ${req.url}`);
  //     res.sendStatus(500).end();
  //   });
  //   next();
  // });

  server.get('/main', (req, res) => {
    return app.render(req, res, '/main');
  });

  server.get('/newProducts', (req, res) => {
    return app.render(req, res, '/newProducts');
  });

  // API Level에서 서버가 정상적으로 구동되었는지 확인을 위한 API
  server.get('/healthcheck/_check', (req, res) => {
    return res.json({ healthy: 'ok' });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  server.use(AWSXRay.express.closeSegment());
});
