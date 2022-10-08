import { Navigation, Lists } from '../components';
import Head from 'next/head';

const List = () => {
  // const { heroMovie } = useSelector((store: RootState) => store.shows);
  return (
    <section>
      <Head>
        <title>My List - Netflix</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Navigation />
      <Lists />
    </section>
  );
};

export default List;
