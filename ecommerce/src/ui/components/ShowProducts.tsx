import { Link } from 'react-router-dom';
import { Redbar, Star, Wishlist } from '@ui/assets/Icons';
import { useClient } from '@lib/Context';
import Picture from '@ui/components/Picture';
import { products } from '@lib/data';

function Time() {
  /* Time left */
  const timeLeft = {
    Days: 3,
    Hours: 23,
    Minutes: 13,
    Seconds: 19,
  };
  return (
    <div className="flex items-center gap-x-3 font-medium text-xs">
      {Object.entries(timeLeft).map(([key, value]) => (
        <>
          <p className="grid gap-y-1.5">
            {key}
            <span className="flex gap-x-2 font-heading-bold text-24 tracking-[0.04em] lg:text-32">
              {value < 10 ? `0${value}` : value}
              {key !== 'Seconds' && <span className="text-clr-ButtonRed">:</span>}
            </span>
          </p>
        </>
      ))}
    </div>
  );
}

const ShowProducts: React.FC<ShowProductsProps> = ({
  list,
  title = [],
  time = false,
  viewAll = false,
  openAddToCart = false,
}) => {
  const {
    client: { cart, wishlist },
    setClient,
  } = useClient();

  const items = products.filter((item: { id: number }) => (list.includes(item.id) ? item : false));

  const addToCart = (id: number) => {
    setClient((prev: Client) => {
      const isExist = cart.findIndex((item: { id: number }) => item.id === id);
      if (isExist < 0) prev.cart = [{ id, quantity: 1 }, ...prev.cart] as Client['cart'];
      else {
        const [{ id, quantity }] = prev.cart.splice(isExist, 1);
        prev.cart = [{ id, quantity: quantity + 1 }, ...prev.cart] as Client['cart'];
      }
      return { ...prev, cart: [...prev.cart] };
    });
  };
  const addToWishlist = (target: HTMLButtonElement, id: number) => {
    target.classList.add('animate-[ping_.5s]');
    target.addEventListener('animationend', () => {
      target.classList.remove('animate-[ping_.5s]');
    });

    setClient((prev: Client) => {
      const isExist: boolean = prev.wishlist.includes(id as never);
      return {
        ...prev,
        wishlist: isExist
          ? [...prev.wishlist.filter((item) => item !== id)]
          : [...prev.wishlist, id],
      };
    });
  };

  return (
    <div className="border-b px-4 py-[60px]">
      <div className="">
        {/* Title */}
        {title.length > 0 && (
          <>
            {title.length === 2 && (
              <h2 className="flex items-center gap-x-4 font-semibold text-clr-ButtonRed">
                <Redbar />
                {title[0]}
              </h2>
            )}
            <div
              className={`lg:flex-rom mb-12 mt-4 flex flex-col items-start gap-6 xl:gap-x-[5.35rem]`}
            >
              <h3 className="font-heading-semibold text-32 tracking-[0.04em] lg:text-36">
                {title.length > 1 ? title[1] : title[0]}
              </h3>
              {time && <Time />}
            </div>
          </>
        )}

        {/* Products */}
        <div className="mt-[37px] grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {items.map(({ id, name, rating, ratingCount, discount, price: realPrice }, index) => {
            const price = realPrice - Math.round((discount / realPrice) * 100);

            return (
              <figure key={index} className="group grid">
                <div className="group-hover:bg relative grid h-52 place-content-center overflow-hidden rounded bg-clr-Secondary lg:h-[250px]">
                  <Picture
                    src={`products/${id}.png`}
                    alt={name}
                    className="duration-200 group-hover:scale-110"
                    imgClassName="max-h-32 max-w-32"
                  />
                  <div className="absolute inset-0 flex items-start justify-between p-3">
                    {discount > 0 && (
                      <span className="rounded bg-clr-ButtonRed px-1.5 py-1 text-[0.7rem] text-white lg:px-3 lg:text-xs">
                        -{discount}%
                      </span>
                    )}
                    {/* Wishlist */}
                    <button
                      className="group/button isolate ml-auto grid aspect-square w-9 place-content-center rounded-full bg-white hover:bg-clr-ButtonRed hover:fill-white hover:text-white"
                      onClick={({ target }) =>
                        addToWishlist(target as HTMLButtonElement, id as number)
                      }
                    >
                      <Wishlist
                        className={`relative -z-10 ${wishlist.includes(id as never) ? 'fill-clr-ButtonRed text-clr-ButtonRed group-hover/button:fill-white group-hover/button:stroke-white' : 'fill-none'}`}
                        width="24px"
                        height="24px"
                        strokeWidth="2"
                      />
                    </button>
                    <button
                      type="button"
                      className={`${openAddToCart ? '' : 'translate-y-full group-hover:translate-y-0'} absolute inset-0 top-auto bg-black py-3 font-medium text-xs text-white duration-200 hover:bg-clr-ButtonRed md:text-base`}
                      onClick={() => addToCart(id)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <Link
                  to={`/products/${id}`}
                  className="mt-auto grid gap-y-2 border-b-8 pb-6 font-medium text-sm duration-300 group-hover:border-black lg:text-base"
                >
                  <figcaption className="pt-5">
                    <p>{name}</p>
                    <p className="mt-4 flex gap-x-2 text-clr-ButtonRed">
                      ${price}
                      {discount > 0 && (
                        <span className="text-black line-through opacity-50">${realPrice}</span>
                      )}
                    </p>
                    <div className="mt-4 flex gap-x-2">
                      {/* Stars */}
                      <Star count={rating} />
                      <span className="font-semibold opacity-50">({ratingCount})</span>
                    </div>
                  </figcaption>
                </Link>
              </figure>
            );
          })}
        </div>
        {/* View All Button */}
        {viewAll && (
          <button className="mx-auto mt-7 block rounded bg-clr-ButtonRed px-12 py-4 font-medium leading-6 text-white">
            View All Products
          </button>
        )}
      </div>
    </div>
  );
};
export default ShowProducts;
