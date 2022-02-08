import jsdomGlobal from 'jsdom-global';
jsdomGlobal();

document.body.innerHTML = '<div id="app"></div>';

it('renders without crashing', async function () {
    await import ('./app.js')
});
