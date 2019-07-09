import develop from './develop';
import production from './production';

let config = production;

// The check is on location.href, in this case detect if is localhost
if (/localhost/.test(window.location.href) /*|| window.__DOZ_SSR_PATH__*/) {
    config = develop;
}

export default config
