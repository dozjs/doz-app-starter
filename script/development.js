const nodemon = require('nodemon');
const Bundler = require('parcel-bundler');
const path = require('path');
const open = require('open');
const port = require('../package').nodemonConfig.env.PORT;

const url = 'http://localhost:' + port;

const options = {
    watch: true,
    cache: false
};

nodemon({
    script: 'server/app.js'
}).once('start', async function () {

    const file = path.join(__dirname, '../public/index.html');

    const bundler = new Bundler(file, options);

    console.log('> Starting develop server...');
    console.log('');

    // Start builder
    await bundler.bundle();

    console.log('\n');
    console.log('> Server listen', url);

    //Open app in browser
    await open(url);

}).on('restart', function () {
    console.log('> Server restarting...');
});