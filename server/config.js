// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'habiballah.auth0.com',
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://<dbuser>:<dbpassword>@ds243008.mlab.com:43008/mean-rsvp',
    NAMESPACE: 'http://myapp.com/roles'
};