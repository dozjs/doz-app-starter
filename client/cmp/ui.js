import {component} from 'doz'
import DozRouter from 'doz-router'
import './nav'
import './logo'
import './pages/dashboard'
import './pages/users'
import './pages/contact'

component('doz-router', DozRouter);

component('app-ui', {

    template() {
        return `
            <header>
                <app-nav></app-nav>
                <app-logo></app-logo>
            </header>
            <main>
                <doz-router mode="history" d:id="router">
                    <app-dashboard route="/"></app-dashboard>
                    <app-users route="/users"></app-users>
                    <app-contact route="/contact"></app-contact>
                </doz-router>
            </main>
        `
    }

});