# Project Checkpoint 4

## Installation

Clone checkpoint-04 branch.

`npm install`

## Development Server

`npm run dev-serve` starts a local development server with hot reload on port 8080. _Not suitable for testing PWA though._

## Production Server

To test PWA functionality:

First `npm run build` to build project files for production into `/dist`.

If you have `serve` installed globally, then `npm run prod-serve` will start a local server on port 5000.

Otherwise, run `npx serve -s dist` to start a local server on port 5000.
