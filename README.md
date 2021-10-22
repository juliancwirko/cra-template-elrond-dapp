## Elrond Dapp - custom starter kit

Custom Elrond Blockchain Dapp React starter kit

```
npx create-react-app my-app --template elrond-dapp
```
(npx is a package runner tool that comes with npm 5.2+ and higher, see instructions for older npm versions)

```
npm init react-app my-app --template elrond-dapp
```
(npm init is available in npm 6+)

```
yarn create react-app my-app --template elrond-dapp
```
(yarn create is available in Yarn 0.25+)

```
cd my-app
yarn start
```

### Configuration

**By default postinstall script will setup .env.local with devnet configuration.**

There are examples are for the devnet and the testnet in separate files: `.env.devnet.example` and `.env.testnet.example`.

Dependencies: 

- React with Typescript
- [@elrondnetwork/dapp](https://github.com/ElrondNetwork/dapp),
- [@elrondnetwork/dapp-utils](https://github.com/ElrondNetwork/dapp-utils),
- [@elrondnetwork/erdjs](https://github.com/ElrondNetwork/elrond-sdk-erdjs),
- [evergreen-ui](https://evergreen.segment.com/),
- Prettier and Eslint configured to work with Typescript

 Just a custom one, remember that there is an official [dapp-template](https://github.com/ElrondNetwork/dapp-template)
 
 #### Contact me: 

 - [Twitter](https://twitter.com/JulianCwirko)
 - [GitHub](https://github.com/juliancwirko)
