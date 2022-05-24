# Auth boilerplate for express and Deta


This repo contains an express server running on [deta micros](https://docs.deta.sh/docs/micros/about) with JWT authentication.

## Dependencies:

- [Deta CLI](https://docs.deta.sh/docs/cli/install).

> Project dependencies are listed on package.json.


## Running Locally:


WARNING: remember to add your project key in the env file. Without it, [Deta base](https://docs.deta.sh/docs/base/about) won't work', also you have to add a secret key for signing your tokens.

- .env files looks like this:

```
PROJECT_KEY="my project key."

SECRET_KEY="my super-secret key."

```

for running locally:

```bash
npm run dev
```

## Deploy

> If you deploy your micro before you add env variables, or you need to add more env variables, you need to update your .env file by running this command `deta update -e <env_file_name>` 


## Deta button deploy.

If you prefer, you can deploy this project directly to deta micros by clicking this button.

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/MauroMontan/express-micro-with-deta)

## this repo is being built


