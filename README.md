# Halo Lab Website

## What we should take in consideration during development:

1. It's a public repo, so no private data should be commited
2. We already have this app implemented, we need to re-use as many code as possible.
3. This app should be fast. Integrate Lighthouse from the very beginning. Our goal is 100 points on each category
4. We shouldn't touch back-end of the existing app. All blog data should live in wordpress, we will retrieve it with gatsby wordpress plugin

## Prerequisites

The application was built with Node `10.8`

Run this command if you're using nvm

```
nvm use
```

## Installation

Download all necessary dependencies:

```
npm install
```

## Development

Start server, watch changes and update build in development mode:

```
npm start
```

Clean cache directory:

```
npm run clean
```

## Production

Create build in a production mode:

```
npm run build
```

Start server in production mode:

```
npm run serve
```

> **Note**
>
> A list of all the commands you can find in the file `package.json`.
