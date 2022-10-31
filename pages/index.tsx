import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organism/navbar/index';
import MainBanner from '../components/organism/MainBanner';
import TransactionStep from '../components/organism/TransactionStep';
import FeaturedGame from '../components/organism/FeaturedGame';
import Reached from '../components/organism/Reached';
import Story from '../components/organism/Story';
import Footer from '../components/organism/Footer';

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
      <div
        className="credits"
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <p style={{ borderBottom: '1px dashed black', backgroundColor: 'white' }}>
          Built by
          {' '}
          <a target="_blank" href="https://irham-maulana.netlify.app" style={{ color: 'blue' }} rel="noreferrer">Irham Maulana </a>
        </p>
      </div>
    </>
  );
}

export default Home;
