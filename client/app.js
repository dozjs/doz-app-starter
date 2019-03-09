import Doz from 'doz'
import hotLocationReload from 'doz-hot-location-reload'
import metaTag from 'doz-metatag'
import snap from 'doz-snap/plugin'
import isSSR from 'doz-ssr/plugin'
import 'doz-router'
import logoUrl from './logo.svg'
import './app.css'
import './cmp/app-nav'
import './cmp/pages/page-home'
import './cmp/pages/page-about'

// This causes the page to reload in the browser
// when there are changes during the development phase
hotLocationReload(module);

// Plugin used during Pre-rendering
Doz.use(snap);

// Plugin used during Server Side Rendering
Doz.use(isSSR);

Doz.use(metaTag, {
    title: 'My Doz App',
    description: 'Magic development'
});

new Doz({

    root: '#app',

    template(h) {
        return h`
            <header>
                <h3>Welcome to your Doz app!</h3>
                <img src="${logoUrl}" title="Doz logo">
                <p>Start to editing client/app.js</p>
                <app-nav/>
            </header>
            <main>
                <doz-router mode="history">
                    <page-home route="/"/>
                    <page-about route="/about"/>
                </doz-router>
            </main>
        `
    },

    onCreate() {
        // Every time a component is mounted on the DOM,
        // I update the list of links mapped with the "data-router-link" attribute
        this.app.on('componentMount', () => {
            if (this.router) {
                this.router.bindLink();
            }
        });
    },

});