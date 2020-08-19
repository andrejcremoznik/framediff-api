# FrameDiff - API

For the frontend part see [FrameDiff - Web](https://github.com/andrejcremoznik/framediff-web).

**Description**

This is just a simple demo [FeathersJS](http://feathersjs.com) API to support the frontend.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/framediff-api
    npm install
    ```

3. Start your app

    ```
    npm run dev
    ```

## Running in a production environment

This is definitely not production code but if you did run it in production, set the `FRAMEDIFF_SECRETS` environment variable.

It's a comma (`,`) separated list of strings that would allow saving global objects from the frontend.

See `config/production.json`.
