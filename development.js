process.env.NODE_ENV = 'development';

const Bundler = require('parcel-bundler');
const path = require('path');
const opn = require('opn');
const {app, startSSR} = require('./server/app');

const options = {
    watch: true,
    cache: false,
    outDir: 'public/dist',
    outFile: 'bundle.js',
    publicUrl: './'
};

const file = path.join(__dirname, './client/app.js');

const bundler = new Bundler(file, options);

console.log('> Starting develop server...');
console.log('');

app.listen(3000, async ()=> {
    const url = 'http://localhost:3000';

    // Start builder
    await bundler.bundle();

    // Start server-side rendering
    startSSR();

    console.log('\n');
    console.log('> Server listen', url);

    //Open app in browser
    opn(url);
});

