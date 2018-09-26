import Doz from 'doz'
import metaTag from 'doz-metatag'
import 'doz-router'
import logoUrl from './logo.svg'
import './app.css'
import './cmp/nav'
import './cmp/pages/home'
import './cmp/pages/about'

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