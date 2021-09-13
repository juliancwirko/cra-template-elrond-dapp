import MainLayout from './MainLayout';
import { useHistory } from 'react-router-dom';
import { Pane, Button } from 'evergreen-ui';

const Home: React.FC = () => {
  const history = useHistory();

  const unlock = () => {
    history.push('/unlock');
  };

  return (
    <MainLayout>
      <Pane backgroundColor="white" elevation={1} padding={30}>
        <Button onClick={unlock}>Unlock</Button>
      </Pane>
    </MainLayout>
  );
};

export default Home;
