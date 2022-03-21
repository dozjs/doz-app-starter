import 'regenerator-runtime'
import Doz from 'doz'
import hotLocationReload from 'doz-hot-location-reload'
import metaTag from 'doz-metatag'
import ssrPlugin from 'doz-ssr/plugin'
import CONFIG from './config'
import Main from './components/main'
import actions from './actions'

// This causes the page to reload in the browser
// when there are changes during the development phase
hotLocationReload(module);

// Plugin used during Server Side Rendering
Doz.use(ssrPlugin);

// Plugin that changes the meta tags
Doz.use(metaTag, {
    title: 'My Doz App',
    description: 'Magic development'
});

// Add configuration to all components,
// so it's possible call in this way this.CONFIG.FOO
Doz.mixin({
    CONFIG
});

Doz.appCreate('#app', Main,
    {
        actions
    }
);

