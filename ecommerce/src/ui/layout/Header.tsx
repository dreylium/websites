import { useMemo } from 'react';
import { useClient, useUI } from '@lib/Context';
import ShowCart from '@ui/components/ShowCart.tsx';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Wishlist, Cart, Search } from '@ui/assets/Icons';
import { useEffect } from 'react';

const Header: React.FC<{ rightHeader?: boolean }> = ({ rightHeader }) => {
  const {
    client: { cart, wishlist },
  } = useClient();
  const { ui, setUI } = useUI();
  const currentCart = useMemo(() => cart, [cart]);
  const { pathname } = useLocation();

  useEffect(() => {
    setUI({ ...ui, openCart: false });
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-white px-6 shadow-[0_1px_5px_rgba(0,0,0,.3)] xl:px-[135px]">
        <div className="relative z-10 mx-auto max-w-screen-2xl bg-white">
          <div className="flex items-center bg-white py-4 lg:pt-10">
            {/* Logo */}
            <Link to="/">
              <h1 className="py-[7px] font-heading-bold text-24 tracking-[0.03em]">Exclusive</h1>
            </Link>
            {/* Navigation */}
            <nav className="fixed inset-0 right-1/2 z-50 hidden bg-white lg:static lg:inset-auto lg:ms-20 2xl:ms-40">
              <button className="m-6 ml-auto block aspect-square w-12 rounded-full bg-clr-ButtonRed lg:hidden">
                X
              </button>
              <ul className="flex flex-col p-16 text-center lg:flex-row lg:p-0 lg:text-left">
                {Object.entries({
                  Home: '/',
                  Contact: '/contact',
                  About: '/about',
                  Login: '/login',
                }).map(([key, value]) => (
                  <li
                    className={
                      pathname === value
                        ? 'text-clr-Secondary2 underline underline-offset-[5px]'
                        : ''
                    }
                    key={key}
                  >
                    <Link to={value} className="block p-6 hover:text-clr-ButtonRed">
                      {key}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Side */}
            {rightHeader && (
              <div className="ml-auto flex items-center gap-x-6">
                <form className="flex items-center rounded-lg bg-clr-Secondary py-[7px] pe-3 ps-5">
                  <input
                    type="text"
                    className="hidden w-[11.7rem] bg-transparent text-xs"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit">
                    <Search />
                  </button>
                </form>
                <div className="flex items-center gap-x-4">
                  {/* Wishlist */}
                  <div className="relative">
                    <Link to="/wishlist">
                      {wishlist.length > 0 && (
                        <span className="absolute -right-1 -top-1 grid aspect-square h-4 place-content-center rounded-full bg-clr-Secondary2 text-xs text-white">
                          {wishlist.length}
                        </span>
                      )}
                      <Wishlist />
                    </Link>
                  </div>
                  {/* Cart */}
                  <div>
                    <button
                      type="button"
                      aria-label="Cart"
                      className="relative"
                      onClick={() => setUI({ ...ui, openCart: !ui.openCart })}
                    >
                      {currentCart.length > 0 && (
                        <span className="absolute -right-1 -top-1 grid aspect-square h-4 place-content-center rounded-full bg-clr-Secondary2 text-xs text-white">
                          {currentCart.length}
                        </span>
                      )}
                      <Cart />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <ShowCart />
        </div>
        {/* Header */}
      </header>
    </>
  );
};
export default Header;
