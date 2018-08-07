import {component} from 'doz'

component('app-nav', {

    template() {
        return `
            <nav>
                <ul>
                    <li>
                        <a router-link href="/">Dashboard</a>
                    </li>
                    <li>
                        <a router-link href="/users">Users</a>
                    </li>
                    <li>
                        <a router-link href="/contact">Contact</a>
                    </li>
                </ul>   
            </nav>
        `
    }

});