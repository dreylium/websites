import { Outlet } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
// import fetchData from '@lib/fetchData';
import Header from './Header';
import Footer from './Footer';

export const Context = createContext<AppContext | Record<string, never>>({});
export default function Layout() {
  const [state, setState] = useState<State>({
    cart: [],
    wishlist: [],
  });

  useEffect(() => {
    // fetchData(state);
  }, []);

  return (
    <>
      <Context.Provider value={{ state, setState }}>
        <Header />
        <Outlet />
        <Footer />
      </Context.Provider>
    </>
  );
}
