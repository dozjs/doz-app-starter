import Doz from 'doz'
import metaTag from 'doz-metatag'
import CONFIG from './config'
import Main from './components/main'
import actions from './actions'

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

