// if NODE_ENV is set to production, it reads production.js
// if NODE_ENV is set to development, it reads development.js

module.exports = require('./env/' + process.env.NODE_ENV);