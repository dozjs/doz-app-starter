import {Component, tag} from 'doz'

export default @tag('page-home')
class PageHome extends Component {
    props = {
        title: 'Home'
    };

    template(h) {
        
        //language=HTML
        return h`
            <div>
                 <h1>${this.props.title}</h1>
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
}
