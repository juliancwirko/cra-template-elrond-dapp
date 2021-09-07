### Elrond Dapp - custom starter kit

Remember to configure .env file. Review and rename `.env.devnet.example` (or `.env.testnet.example`) to `.env.local`. Examples are for the devnet and the testnet in separate files.

```
yarn create reac-app my-app --template elrond-dapp
```
or
```
npx create-react-app my-app --template elrond-dapp
```
then
```
cd my-app
cp .env.devnet.example .env.local
yarn start
```

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
