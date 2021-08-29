import MainLayout from './MainLayout';
import { useHistory } from 'react-router-dom';
import { Pane, Button } from 'evergreen-ui';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <MainLayout>
      <Pane backgroundColor='white' elevation={1} padding={30}>
        <Button onClick={() => history.push('/unlock')}>Unlock</Button>
      </Pane>
    </MainLayout>
  );
};

export default Home;
