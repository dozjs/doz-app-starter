import {component} from 'doz'

component('app-about', {

    template() {
        return `
            <div>
                 <h1>About</h1>
                 <p>Doz was created to speed up the development of web applications<br/>with a simple and linear syntax 
                 almost like writing in VanillaJS.</p>
            </div>
        `
    }

});