# Auth boilerplate for express and Deta


This repo contains an express server running on [deta micros](https://docs.deta.sh/docs/micros/about) with JWT authentication.

## Dependencies:

- [Deta CLI](https://docs.deta.sh/docs/cli/install).

> Project dependencies are listed on package.json.


## Running Locally:

> To running locally, ensure debug const is set on true in ./index.js `const debug = true;`

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



> If you deploy your micro before you add env variables, or you need to add more env variables, you need to update your .env file by running this command `deta update -e <env_file_name>` 


