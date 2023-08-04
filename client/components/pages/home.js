import {Component} from 'doz'

class PageHome extends Component {
    constructor(o) {
        super(o);
        this.props = {
            title: 'Home'
        };

        this.config = {
            store: 'home'
        }
    }

    template(h) {
        
        //language=HTML
        return h`
            <div>
                <h1>${this.props.title}</h1>
                <p>For guide to Doz please read the simple documentation <a target="_blank" href="https://github.com/dozjs/doz/blob/master/documentation/index.md">here</a></p>
                <p>How does routing work? look <a target="_blank" href="https://github.com/dozjs-cmp/doz-router/">here</a></p>
                <p>Your environment is <strong>${this.CONFIG.ENV}</strong></p>
                <p>
                    try an action: 
                    <button onclick="${this.action.utils.showTitle}">Show title</button>
                </p>
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

PageHome.tag = 'page-home';
export default PageHome