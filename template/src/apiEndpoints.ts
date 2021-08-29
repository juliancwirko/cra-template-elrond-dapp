import { network } from './config';

export const getTransactionByHash = (txHash: string) =>
  `${network.apiAddress}/transactions/${txHash}`;

export const getTransactions = (senderAddress: string, from = 0, size = 5) =>
  `${network.apiAddress}/transactions?sender=${senderAddress}&receiver=${senderAddress}&condition=should&from=${from}&size=${size}`;
