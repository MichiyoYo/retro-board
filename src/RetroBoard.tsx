import { Header, Main, Footer } from '@/layout';
import { Board } from '@/components';

export const RetroBoard = () => (
  <div className='flex flex-col justify-between p-5 h-[100vh] w-full gap-20'>
    <Header />
    <Main>
      <Board />
    </Main>
    <Footer />
  </div>
);
