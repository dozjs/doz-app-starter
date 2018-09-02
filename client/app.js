import Doz from 'doz'
import 'doz-router'
import logoUrl from './logo.svg'
import './app.css'
import './cmp/nav'
import './cmp/pages/home'
import './cmp/pages/about'

new Doz({

    root: '#app',

    template() {
        return `
            <header>
                <h3>Welcome to your Doz app!</h3>
                <img src="dist/${logoUrl}" title="Doz logo">
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