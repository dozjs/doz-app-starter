require('jsdom-global')();

document.body.innerHTML = '<div id="app"></div>';

it('renders without crashing', function () {
    require('./app');
});
