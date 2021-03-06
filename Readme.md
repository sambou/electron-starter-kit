# electron-starter-kit
## About
Small starter kit for electron apps.

## Install instructions
1. Prerequisites: you need to have installed electron on your system/Path: ```npm install electron-prebuilt -g```
1. clone repository: ```git clone --bare https://github.com/sambou/electron-starter-kit.git```
1. run ```npm install```

## Testing
- Unit tests: Mocha (electron flavour) and Sinon
Run tests via ```./node_modules/.bin/electron-mocha  ./test --recursive```
- Integration tests & E2E tests: TODO...

## Folder structure:
```
├── package.json
├── src
│   ├── appContent          // contains modules for the main process (gets initialized in index.js)
│   │   └── application.js
│   └── webContent          // contains modules for the rendering process (i.e. everything that gets run inside the browser windows)
│       ├── index.html
│       └── mainWeb.js
└── test
    ├── appContent
    └── webContent
        └── mainWeb.js
└── main.js                // entry point for the application (see also package.json)
```
