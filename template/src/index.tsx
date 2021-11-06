import React from 'react';
import { Pane, Heading, Link, Code, Text } from 'evergreen-ui';
import ReactDOM from 'react-dom';
import { NetworkConfig, ProxyProvider } from '@elrondnetwork/erdjs';
import App from './App';
import { network } from './config';
import reportWebVitals from './reportWebVitals';
import './main.css';

let MainComponent = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Sync Elrond provider
if (network?.gatewayAddress) {
  const proxyProvider = new ProxyProvider(network.gatewayAddress);
  NetworkConfig.getDefault().sync(proxyProvider);
} else {
  MainComponent = (
    <React.StrictMode>
      <Pane textAlign="center" paddingTop={100}>
        <Heading size={900} marginBottom={30}>
          Elrond Dapp starter kit
        </Heading>
        <Heading>
          Please configure .env.local file to be able to run the app.
        </Heading>
        <Pane marginTop={20} marginBottom={20}>
          <Code>cp .env.devnet.example .env.local</Code>
          <Text> or </Text>
          <Code>cp .env.testnet.example .env.local</Code>
        </Pane>
        <Heading size={300}>
          More info in the{' '}
          <Link href="https://github.com/juliancwirko/cra-template-elrond-dapp/blob/main/README.md">
            README.md
          </Link>{' '}
          file.
        </Heading>
      </Pane>
    </React.StrictMode>
  );
}

ReactDOM.render(MainComponent, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
