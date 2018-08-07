import {component} from 'doz'
import DozRouter from 'doz-router'
import './nav'
import './pages/dashboard'
import './pages/users'

component('doz-router', DozRouter);

component('app-ui', {

    template() {
        return `
            <header>
                <app-nav></app-nav>
            </header>
            <main>
                <doz-router mode="history" d:id="router">
                    <app-dashboard route="/"></app-dashboard>
                    <app-users route="/users"></app-users>
                </doz-router>
            </main>
            <footer>My basic app</footer>
        `
    }

});