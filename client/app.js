import Doz from 'doz'
import DozRouter from 'doz-router'
import logoUrl from './logo.svg'
import './app.css'
import './cmp/nav'
import './cmp/pages/home'
import './cmp/pages/about'

Doz.component('doz-router', DozRouter);

new Doz({

    root: '#app',

    template() {
        return `
            <header>
                <img src="dist/${logoUrl}" title="Doz logo">
                <h3>Welcome to your Doz app!</h3>
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