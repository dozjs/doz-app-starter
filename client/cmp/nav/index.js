import {component} from 'doz'

const cfg = {

    template(h) {
        return h`
            <nav>
                <ul>
                    <li>
                        <a data-router-link href="/">Home</a>
                    </li>
                    <li>
                        <a data-router-link href="/about">About</a>
                    </li>
                </ul>   
            </nav>
        `
    }

};

component('app-nav', cfg);

export default cfg;