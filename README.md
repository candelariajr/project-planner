# project-planner
A simple project tracker for a Vue project demonstrating knowledge of the Vue CLI and general Vue application structure.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
json-server --watch data/db.json
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


This project does not tie into a database. It uses db.json as a flat file data store.
This means that in order to run it, there needs to be a Json Server acting as a database instance.
Before running 'npm run serve' be sure to run 'json-server --watch data/db.json'.
Sometimes with Windows it wont recognize an npm command unless it's prefixed with 'npx', this is due to not installing
the library globally, triggering the creation of an environment variable. 