## Install swagger CLI

- Install the swagger command line tool

```
npx install -g swagger-cli // or
sudo npm install -g swagger-cli
```

## Generate the resolved OpenAPI definition file

- In the root directory, run:

```
swagger-cli bundle ./index.yaml --outfile build/api.yaml --type yaml
```

Your generated API can be found at `/build/api.yaml`
