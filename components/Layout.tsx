import { ReactElement } from 'react';
import Header from './Header';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Layout;
