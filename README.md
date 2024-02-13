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


## Generating Protobuf definition on MacOS

1. downloading [gnostic](https://github.com/google/gnostic?tab=readme-ov-file)
2. cd gnostic
3. ```go install google.golang.org/protobuf/cmd/protoc-gen-go@latest```
4. ```export PATH=$PATH:$(go env GOPATH)/bin```
5. ```protoc-gen-go --version```


```
gnostic --pb-out=../build/ ../build/api.yaml
```
