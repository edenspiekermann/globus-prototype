# globus-prototype

## Development

This prototype is build with [next.js](https://github.com/zeit/next.js#how-to-use). Please follow their documentation.

```bash
npm install
npm run dev
```

To build a static version of the prototype into `build/`

```bash
npm run build
```

### Lint files

```bash
npm run lint
```

You can automatically fix some problems by running

```bash
npm run lint -- --fix
```

### Structure

- `tokens.js` contains a list of commonly used variables, such as fonts or mediaqueries
- `/components` holds are components used somewhere in the example pages
- `/data` contains all data, which is displayed in the various components
- `/pages` follows next.js conventions and contains all routes
