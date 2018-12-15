import {define, Component} from 'doz'

define('app-about', class extends Component {

    template(h) {
        return h`
            <div>
                 <h1>About</h1>
                 <p>Doz was created to speed up the development of web applications<br/>with a simple and linear syntax 
                 almost like writing in VanillaJS.</p>
            </div>
        `
    }

    onMount() {
        this.metaTag({
            title: 'About',
            description: 'My About Page'
        });
    }

});