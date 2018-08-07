process.env.NODE_ENV = 'development';

const Bundler = require('parcel-bundler');
const path = require('path');
const opn = require('opn');
const server = require('./server/app');

const options = {
    watch: true,
    cache: false,
    outDir: 'public/dist',
    outFile: 'bundle.js',
    publicUrl: './'
};

const file = path.join(__dirname, './client/app.js');

const bundler = new Bundler(file, options);

server.listen(3000, async ()=> {
    await bundler.bundle();
    opn('http://localhost:3000');
});

