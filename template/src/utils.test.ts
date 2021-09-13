import { shortenWalletAddress, stringToHex, hexToString } from './utils';

const mockedPseudoAddress = 'haskdhaskhdkashdkashdkashkdasdhaskhdkas';
const hexString = '456c726f6e6420697320617765736f6d6521';
const utf8String = 'Elrond is awesome!';

test('shortens wallet address with default 6 chars', async () => {
  expect(shortenWalletAddress(mockedPseudoAddress)).toBe('haskdh...khdkas');
});

test('shortens wallet address with 3 chars', async () => {
  expect(shortenWalletAddress(mockedPseudoAddress, 3)).toBe('has...kas');
});

test('decodes hex', () => {
  expect(hexToString(hexString)).toBe(utf8String);
});

test('encodes hex', () => {
  expect(stringToHex(utf8String)).toBe(hexString);
});
