import { useMemo, useState } from 'react';
import { useClient, useUI } from '@lib/Context';
import ShowCart from '@ui/components/ShowCart.tsx';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Wishlist, Cart, Search, Menu, ButtonLeft, Close } from '@ui/assets/Icons';
import { useEffect } from 'react';

const Header: React.FC<{ rightHeader?: boolean }> = ({ rightHeader }) => {
  const {
    client: { cart, wishlist },
  } = useClient();
  const { ui, setUI } = useUI();
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const currentCart = useMemo(() => cart, [cart]);
  const { pathname } = useLocation();

  useEffect(() => {
    setUI({ ...ui, openCart: false });
    setOpenSearch(false);
  }, [pathname]);

  return (
    <>
      <header className="layout-px sticky top-0 z-40 w-full bg-white shadow-[0_1px_5px_rgba(0,0,0,.3)]">
        <div className="relative z-10 mx-auto max-w-screen-2xl bg-white">
          <div className="flex items-center bg-white py-4 lg:pt-10">
            {/* Logo */}
            <div className="flex items-center">
              <button
                aria-label="open menu"
                className="px-3.5"
                onClick={() => setOpenNav(!openNav)}
              >
                <Menu className="md:hidden" />
              </button>
              <Link to="/">
                <h1 className="py-[7px] font-heading-bold text-xl tracking-[0.03em] lg:text-2xl">
                  Exclusive
                </h1>
              </Link>
            </div>
            {/* Navigation */}
            <nav
              className={`${openNav && 'translate-x-full md:translate-x-0'} fixed inset-y-0 right-full bg-white transition-transform duration-300 md:static md:inset-auto md:ms-8 md:translate-x-0 lg:ms-20 2xl:ms-40`}
            >
              <button
                className="m-5 ml-auto block aspect-square w-10 rounded-full text-3xl md:hidden"
                aria-label="close button"
                onClick={() => setOpenNav(false)}
              >
                <Close />
              </button>
              <ul className="flex flex-col text-center md:flex-row md:text-left">
                {Object.entries({
                  Home: '/',
                  Contact: '/contact',
                  About: '/about',
                  Login: '/login',
                }).map(([key, value]) => (
                  <li key={key}>
                    <Link
                      to={value}
                      className={`block px-16 py-4 hover:text-clr-ButtonRed md:p-6 ${pathname === value && 'text-clr-Secondary2'}`}
                      onClick={() => setOpenNav(false)}
                    >
                      {key}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Side */}
            {rightHeader && (
              <div className={`ml-auto flex items-center gap-x-2 lg:gap-x-4`}>
                <form method="get" action="/search" onSubmit={(e) => e.preventDefault()}>
                  {/* Desktop Search */}
                  <div className="hidden rounded bg-clr-Secondary py-2 ps-4 lg:flex">
                    <input
                      type="text"
                      className={`bg-transparent text-xs`}
                      placeholder="What are you looking for?"
                    />
                    <button type="submit" className="px-2" aria-label="submit">
                      <Search />
                    </button>
                  </div>
                  {/* Mobile Search */}
                  <div
                    className={`lg:hidden ${openSearch ? 'w-full' : 'w-[0%]'} absolute inset-0 z-10 mx-auto flex gap-x-2 overflow-hidden bg-white duration-200`}
                  >
                    <button
                      type="button"
                      aria-label="close search"
                      onClick={() => setOpenSearch(!openSearch)}
                    >
                      <ButtonLeft width={35} height={35} />
                    </button>
                    <input
                      type="text"
                      className={`bg-transparent text-xs lg:bg-red-200`}
                      placeholder="What are you looking for?"
                    />
                    <button type="submit" className="px-2" aria-label="submit">
                      <Search />
                    </button>
                  </div>
                </form>
                {/* Wishlist */}
                <div className="relative flex gap-2">
                  <button
                    type="button"
                    className="lg:hidden"
                    onClick={() => setOpenSearch(!openSearch)}
                  >
                    <Search />
                  </button>
                  <Link to="/wishlist" className="relative">
                    {wishlist.length > 0 && (
                      <span className="absolute -right-1 -top-1 grid aspect-square h-4 place-content-center rounded-full bg-clr-Secondary2 text-xs text-white">
                        {wishlist.length}
                      </span>
                    )}
                    <Wishlist />
                  </Link>
                  {/* Cart */}
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
