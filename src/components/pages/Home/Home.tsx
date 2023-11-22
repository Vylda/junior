import { ReactElement } from 'react';
import { Button, Icon } from '@/components/shared';
import style from './Home.module.css';

const Home = (): ReactElement => {
  return (
    <main className={style.home}>
      <h1>User list</h1>
      <div>
        TODO
        <Button onClick={(): void => {}}>
          <Icon iconName="person"/>
          Add user
        </Button>
      </div>
    </main>
  );
};

export default Home;
