import Doz from 'doz'
import hotLocationReload from 'doz-hot-location-reload'
import metaTag from 'doz-metatag'
import snap from 'doz-snap/plugin'
import isSSR from 'doz-ssr/plugin'
import 'doz-router'
import logoUrl from './logo.svg'
import './app.css'
import './cmp/nav'
import './cmp/pages/home'
import './cmp/pages/about'

hotLocationReload(module);

Doz.use(snap);
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
                <app-nav></app-nav>
            </header>
            <main>
                <doz-router mode="history" d:id="router">
                    <app-home route="/"></app-home>
                    <app-about route="/about"></app-about>
                </doz-router>
            </main>
        `
    }

});