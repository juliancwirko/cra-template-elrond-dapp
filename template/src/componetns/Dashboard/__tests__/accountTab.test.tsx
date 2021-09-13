import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountTab from '../AccountTab';

jest.mock('@elrondnetwork/dapp', () => ({
  useContext: () => ({
    account: { balance: 100 },
    address: '123456',
  }),
}));

test("renders AccountTab's balance", async () => {
  render(<AccountTab />);
  const balanceValue = screen.findByText('100');
  expect(balanceValue).toBeDefined();
});

test("renders AccountTab's address", async () => {
  render(<AccountTab />);
  const addressValue = screen.findByText('123456');
  expect(addressValue).toBeDefined();
});
