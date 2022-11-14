# Authentication microservice for deta projects

## Deta button deploy (no dependencies needed).

Add This microservice with one click !

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/MauroMontan/express-micro-with-deta)

This Project contains two importan endpoints:

| METHOD | Name   | description             | URN                           |
| ------ | ------ | ----------------------- | ----------------------------- |
| POST   | signup | for user registration   | {YOUR DETA MICRO}/auth/signup |
| POST   | signin | for user authentication | {YOUR DETA MICRO}/auth/signin |

### Running Locally:

WARNING: remember to add your project key in the env file. Without it, [Deta base](https://docs.deta.sh/docs/base/about) won't work', also you have to add a secret key for signing your tokens.

### Dependencies:

- [Deta CLI](https://docs.deta.sh/docs/cli/install).

> Project dependencies are listed on package.json.

### Env file content

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
