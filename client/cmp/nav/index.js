import {component} from 'doz'

component('app-nav', {

    template() {
        return `
            <nav>
                <ul>
                    <li>
                        <a router-link href="/">Home</a>
                    </li>
                    <li>
                        <a router-link href="/about">About</a>
                    </li>
                </ul>   
            </nav>
        `
    }

});