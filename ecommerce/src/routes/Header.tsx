import { useContext, useMemo } from 'react';
import { Context } from '@routes/Layout';
import { products } from '@lib/data';
import ShowCart from '@ui/components/ShowCart.tsx';

export default function Header() {
  const { state } = useContext(Context);

  const currentCart = useMemo(() => state.cart, [state.cart]);
  const totalCart = useMemo(
    () => currentCart.reduce((total: number, { id, quantity }: { id: number; quantity: number }) => total + products[id].price * quantity, 0),
    [currentCart],
  );

  return (
    <>
      {/* Top Header */}
      <div className="bg-black px-[135px] py-3 text-sm text-clr-Text">
        <div className="relative mx-auto flex max-w-screen-2xl flex-col items-center justify-center">
          <span className="flex items-center gap-x-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="/shop" className="font-heading-semibold leading-6 underline">
              ShopNow
            </a>
          </span>
          {/* Language */}
          <button className="absolute self-end">English</button>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full bg-white">
        {/* Header */}
        <div className="px-[135px] shadow-[0_1px_5px_rgba(0,0,0,.3)]">
          <div className="relative mx-auto flex max-w-screen-2xl items-center justify-between pb-4 pt-10">
            {/* Logo */}
            <a href="/">
              <h1 className="py-[7px] font-heading-bold text-24 tracking-[0.03em]">Exclusive</h1>
            </a>
            {/* Navigation */}
            <nav>
              <ul className="flex gap-12">
                <li className={`underline-offset-[5px]`}>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
              </ul>
            </nav>
            {/* Side */}
            <div className="flex items-center gap-x-6">
              <form className="flex items-center rounded-lg bg-clr-Secondary py-[7px] pe-3 ps-5">
                <input
                  type="text"
                  className="w-[11.7rem] bg-transparent text-xs"
                  placeholder="What are you looking for?"
                />
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </form>
              <div className="flex items-center gap-x-4">
                {/* Wishlist */}
                <div className="relative">
                  <span className="absolute -right-1 -top-1 grid aspect-square h-4 place-content-center rounded-full bg-clr-Secondary2 text-xs text-white">
                    {state.wishlist.length}
                  </span>
                  <button type="button">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <button type="button" aria-label="Cart" className="relative">
                    <span className="absolute -right-1 -top-1 grid aspect-square h-4 place-content-center rounded-full bg-clr-Secondary2 text-xs text-white">
                      {currentCart.length}
                    </span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 5H7L10 22H26"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <ShowCart currentCart={currentCart} totalCart={totalCart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}