# Authentication microservice for deta space

Docs building ...

```yaml

# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0

micros:
    #.......

    # Suggested micro config
  - name: auth-micro
    src: ./deta-auth-micro/
    engine: nodejs16
    path: auth
    public: false
    presets:
      env:
        - name: SECRET_KEY
          description: JWT Secret key for verifying and signing JWT Tokens
          default: "your super secret key goes here, please change it"

    run: node index.js

```
