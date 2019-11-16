import {Component, tag} from 'doz'

@tag('page-about')
export default class extends Component {
    props = {
        title: 'About'
    };

    template(h) {
        return h`
            <div>
                 <h1>${this.props.title}</h1>
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
}