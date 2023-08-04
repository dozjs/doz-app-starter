import 'regenerator-runtime'
import {Component} from 'doz'
import logoUrl from '../logo.svg'
import DozRouter from 'doz-router'
import '../app.css'
import Nav from './nav'
import PageHome from './pages/home'
import PageAbout from './pages/about'

export default class Main extends Component {

    template(h) {

        //language=HTML
        return h`
            <div class="app-container">
                <header>
                    <h3>Welcome to your Doz app!</h3>
                    <img src="${logoUrl}" title="Doz logo">
                    <p>Start to editing client/app.js</p>
                    <${Nav}/>
                </header>
                <main>
                    <${DozRouter} mode="history" suspendcontent>
                        <${PageHome} route="/"/>
                        <${PageAbout} route="/about"/>
                    </${DozRouter}>
                </main>
            </div>
        `
    }

    onCreate() {
        // Every time a component is mounted on the DOM,
        // I update the list of links mapped with the "data-router-link" attribute
        this.app.on('componentMountAsync', () => {
            if (this.router) {
                this.router.bindLink();
            }
        });
    }

    onMountAsync() {
        if (window.SSR)
            window.SSR.ready();
    }
}
