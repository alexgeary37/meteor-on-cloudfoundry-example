const cfenv = require("cfenv")

// export CF env vars for meteor
const mongoServiceName = 'meteor-mongo';
const appEnv = cfenv.getAppEnv()
process.env.ROOT_URL = appEnv.url;
process.env.MONGO_URL = appEnv.getService(mongoServiceName).credentials.uri;

console.log(JSON.stringify(process.env));

// PORT is set correctly by cloud foundry

// launch the bundle's main.js
require('./bundle/main.js');
