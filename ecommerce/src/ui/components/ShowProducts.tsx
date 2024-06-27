import { useContext } from 'react';
import { Separator, RedBar, Star, BtnLeft, BtnRight } from '@ui/components/icons';
import { Context } from '@routes/Layout';
import { products } from '@lib/data';

function Time() {
  /* Time left */
  return (
    <div className="flex items-end gap-x-[1.06rem] font-medium text-xs">
      <p className="grid gap-y-1.5">
        Minutes
        <span className="font-heading-bold text-32 tracking-[0.04em]">03</span>
      </p>
      <Separator />
      <p className="grid gap-y-1.5">
        Hours
        <span className="font-heading-bold text-32 tracking-[0.04em]">23</span>
      </p>
      <Separator />
      <p className="grid gap-y-1.5">
        Minutes
        <span className="font-heading-bold text-32 tracking-[0.04em]">19</span>
      </p>
      <Separator />
      <p className="grid gap-y-1.5">
        Seconds
        <span className="font-heading-bold text-32 tracking-[0.04em]">56</span>
      </p>
    </div>
  );
}

const ShowProducts: React.FC<ShowProductsProps> = ({
  title,
  list,
  time = false,
  button = false,
  viewAll = false,
}) => {
  const { state, setState } = useContext(Context) as AppContext;

  const items = products.filter((item: { id: number }) => (list.includes(item.id)) ? item : false);

  const addToCart = (id: number) => {
    setState(() => {
      const isExist = state.cart.findIndex((item: { id: number }) => item.id === id);
      if (isExist < 0) state.cart = [{ id, quantity: 1 }, ...state.cart] as State['cart'];
      else state.cart[isExist].quantity += 1;
      return { ...state, cart: [ ...state.cart ] };
    });
  };
  const addToWishlist = (target: HTMLButtonElement, id: number) => {
    target.classList.add('animate-[ping_.5s]');
    target.addEventListener('animationend', () => {
      target.classList.remove('animate-[ping_.5s]');
    });

    setState(() => {
      const isExist: boolean = state.wishlist.includes(id as never);
      return {
        ...state,
        wishlist: isExist
          ? [...state.wishlist.filter((item) => item !== id)]
          : [...state.wishlist, id],
      };
    });
  };

  return (
    <div className="border-b py-[70px] pb-[60px]">
      <h2 className="flex items-center gap-x-4 font-semibold text-clr-ButtonRed">
        <RedBar />
        {title[0]}
      </h2>
      {/* Flash Sales Header */}
      <div className={`mt-4 flex items-start gap-x-[5.35rem]`}>
        <h3 className="font-heading-semibold text-36 tracking-[0.04em]">{title[1]}</h3>
        {time && <Time />}
        {button && (
          <div className="ml-auto flex gap-x-2 rounded text-white">
            <button>
              <BtnLeft />
            </button>
            <button>
              <BtnRight />
            </button>
          </div>
        )}
        {viewAll && (
          <button className="mb-6 ml-auto rounded bg-clr-ButtonRed px-12 py-4 text-white">
            View All
          </button>
        )}
      </div>

      {/* Products */}
      <div className="mt-[37px] grid grid-cols-4 gap-x-[30px]">
        {items.map(({ id, name, rating, ratingCount, discount, price: realPrice }, index) => {
          const price = realPrice - Math.round((discount / realPrice) * 100);

          return (
            <figure key={index} className="group">
              <div className="group-hover:bg relative grid min-h-[250px] place-content-center overflow-hidden rounded bg-clr-Secondary">
                <picture>
                  <img
                    src={`/images/products/${id}.png`}
                    alt={name}
                    className="duration-200 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 flex items-start justify-between p-3">
                  <span className="rounded bg-clr-ButtonRed px-3 py-1 text-xs text-white">
                    -{discount}%
                  </span>
                  {/* Wishlist */}
                  <div className="grid gap-y-2">
                    <button
                      className="isolate rounded-full bg-white hover:bg-clr-ButtonRed hover:text-white [&:hover>svg.fill-clr-ButtonRed]:fill-white"
                      onClick={({ target }) =>
                        addToWishlist(target as HTMLButtonElement, id as number)
                      }
                    >
                      <svg
                        className={`relative -z-10 ${state.wishlist.includes(id as never) ? 'fill-clr-ButtonRed text-clr-ButtonRed' : 'fill-none'}`}
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                      >
                        <path
                          d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {/* Show */}
                    <button
                      className={`rounded-full bg-white hover:bg-clr-ButtonRed hover:text-white`}
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                      >
                        <path
                          d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="absolute inset-0 top-auto translate-y-full bg-black py-3 font-medium text-white duration-200 hover:bg-clr-ButtonRed group-hover:translate-y-0"
                    onClick={() => addToCart(id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <a
                href={`/products/${id}`}
                className="mt-5 grid gap-y-2 border-b-8 pb-6 font-medium duration-300 group-hover:border-black"
              >
                <figcaption>
                  <p>{name}</p>
                  <p className="mt-4 flex gap-x-3 text-clr-ButtonRed">
                    ${price}{' '}
                    <span className="text-black line-through opacity-50">${realPrice}</span>
                  </p>
                  <div className="mt-4 flex gap-x-2">
                    {/* Stars */}
                    <Star count={rating} />
                    <span className="font-semibold text-sm opacity-50">({ratingCount})</span>
                  </div>
                </figcaption>
              </a>
            </figure>
          );
        })}
      </div>
      {/* View All Button */}
      {!viewAll && (
        <button className="mx-auto mt-7 block rounded bg-clr-ButtonRed px-12 py-4 font-medium leading-6 text-white">
          View All Products
        </button>
      )}
    </div>
  );
};
export default ShowProducts;
