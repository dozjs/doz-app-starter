# doz-app-starter
Boilerplate for creating Doz app

## Install
```
$ git clone https://github.com/dozjs/doz-app-starter.git your-app
```

Install dependencies
```
$ npm install
```

#### This project includes following modules:

- Front-end
    - [doz](https://github.com/dozjs/doz/)
    - [doz-metatag](https://github.com/dozjs/doz-metatag)
    - [doz-router](https://github.com/dozjs-cmp/doz-router)
- Back-end
    - [doz-ssr](https://github.com/dozjs/doz-ssr)
    - [doz-snap](https://github.com/dozjs/doz-snap)
    - [koa](https://github.com/koajs/koa)
    - [koa-body](https://github.com/dlau/koa-body)
    - [koa-router](https://github.com/alexmingoia/koa-router)
    - [koa-static](https://github.com/koajs/static)

#### Proposal supported (via Babel plugins):
- [Class field declarations for JavaScript](https://github.com/tc39/proposal-class-fields)
- [JavaScript Decorators](https://github.com/tc39/proposal-decorators)

## Scripts
- Development:
    - `start`
- Production:
    - `build`
    - `server`
    - **Pre-rendering**
        - `snap`

- Testing:
    - `test`
- Increase version number and push to GIT (automatically build for production)
    - `release:major` (publish a major)
    - `release:minor` (publish a minor)
    - `release:patch` (publish a patch)

## License
doz-app-starter is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>