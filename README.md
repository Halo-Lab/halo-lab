# Halo Lab Website

<a href="https://www.halo-lab.com/?utm_source=github-halo-lab">
  <img src="http://api.halo-lab.com/wp-content/uploads/dev_halo.svg"
       alt="Developed in Halo lab" height="60">
</a>


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

> **Note**
>
> You also need `.env` file to start project. You can get it from [Sergey Diniovksiy](https://github.com/lazio), [Eugene Byrlad](https://github.com/eugene-halolab) or [Mikhail Netkachev](https://github.com/mikhailnetkachev-halolab).

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
