# Halo Lab Website

**DEPRECATED.**
This repo contains previous version of the website, the current one is written with Eleventy and not yet open sourced. But we're working on it.

It's an open sourced version of [www.halo-lab.com](https://www.halo-lab.com/?utm_source=github-halo-lab) website. 

<a href="https://www.halo-lab.com/?utm_source=github-halo-lab">
  <img src="http://api.halo-lab.com/wp-content/uploads/dev_halo.svg"
       alt="Developed in Halo lab" height="60">
</a>
<br/><br/>

> **Note**
>
> To run this project you need `.env`. We'll add test `.env` file with test tokens later on, for now you can request it from [Sergey Diniovksiy](https://github.com/lazio), [Eugene Byrlad](https://github.com/eugene-halolab) or [Mikhail Netkachev](https://github.com/mikhailnetkachev-halolab).


## Prerequisites

The application was built with Node `12.16.1`

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

Copy the .env.example file to .env

```
cp .env.example .env
```

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
