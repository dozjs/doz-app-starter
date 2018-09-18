process.env.NODE_ENV = 'development';

const Bundler = require('parcel-bundler');
const path = require('path');
const opn = require('opn');
const app = require('./server/app');

const options = {
    watch: true,
    cache: false,
    publicUrl: './'
};

const file = path.join(__dirname, './public/index.html');

const bundler = new Bundler(file, options);

console.log('> Starting develop server...');
console.log('');

app.listen(3000, async ()=> {
    const url = 'http://localhost:3000';

    // Start builder
    await bundler.bundle();

    console.log('\n');
    console.log('> Server listen', url);

    //Open app in browser
    opn(url);
});

