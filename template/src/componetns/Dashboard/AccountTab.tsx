import { Ui } from '@elrondnetwork/dapp-utils';
import { Pane, Heading, Paragraph, Link, Text } from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import * as Dapp from '@elrondnetwork/dapp';

const AccountTab = () => {
  const { account, address, explorerAddress } = Dapp.useContext();
  const smallRes = useMediaQuery({
    query: '(max-width: 600px)',
  });

  return (
    <>
      <Pane display="flex" flexDirection={smallRes ? 'column' : 'row'}>
        <Pane
          width={smallRes ? '100%' : '50%'}
          marginRight={smallRes ? 0 : 10}
          marginBottom={25}
          padding={30}
          elevation={1}
          backgroundColor="white"
        >
          <Heading size={700} marginBottom={10}>
            Your wallet address:
          </Heading>
          <Paragraph data-testid="accountTab-address">
            <Link href={`${explorerAddress}accounts/${address}`}>
              <Text wordWrap="break-word">{address}</Text>
            </Link>
          </Paragraph>
        </Pane>

        <Pane
          width={smallRes ? '100%' : '50%'}
          marginLeft={smallRes ? 0 : 10}
          marginBottom={25}
          padding={30}
          elevation={1}
          backgroundColor="white"
        >
          <Heading size={700} marginBottom={10}>
            Your wallet balance:
          </Heading>
          <Paragraph data-testid="accountTab-balance">
            <Ui.Denominate value={account.balance} erdLabel="xEGLD" />
          </Paragraph>
        </Pane>
      </Pane>
    </>
  );
};

export default AccountTab;
