// import Dev from '../../../dev/index.jsx';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { fetchProducts } from '@lib/fetchData';
import { ContextClient, ContextUI } from '@lib/Context';
import Header from './Header';
import Footer from './Footer';
import TopBanner from '@ui/components/TopBanner.js';
import PopUpAddToCart from '@ui/components/PopUpAddToCart';
import { useLocation } from 'react-router-dom';

const Layout: React.FC<{ rightHeader?: boolean }> = ({ rightHeader = true }) => {
  const [client, setClient] = useState<Client>({
    cart: [],
    wishlist: [],
    lastItem: {
      id: 0,
      what: '',
    },
  });
  const [ui, setUI] = useState<UI>({
    openCart: false,
  });

  // useEffect(() => {
  //   fetchProducts(setClient);
  // }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ContextClient.Provider value={{ client, setClient }}>
      <ContextUI.Provider value={{ ui, setUI }}>
        <TopBanner />
        <PopUpAddToCart />
        <div className="flex min-h-screen flex-col">
          <Header rightHeader={rightHeader} />
          <Outlet />
          <Footer />
        </div>
      </ContextUI.Provider>
    </ContextClient.Provider>
  );
};
export default Layout;
