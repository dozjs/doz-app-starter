import {define, Component} from 'doz'

define('page-home', class extends Component {

    template(h) {
        return h`
            <div>
                 <h1>Home</h1>
                 <p>For guide to Doz please read the simple documentation <a target="_blank" href="https://github.com/dozjs/doz/blob/master/documentation/index.md">here</a></p>
                 <p>How does routing work? look <a target="_blank" href="https://github.com/dozjs-cmp/doz-router/">here</a></p>
                 <p>Your environment is <strong>${this.CONFIG.ENV}</strong></p>
            </div>
        `
    }

    onMount() {
        this.metaTag({
            title: 'Home',
            description: 'My Home Page'
        });
    }

});