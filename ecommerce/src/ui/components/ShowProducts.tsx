import { Link } from 'react-router-dom';
import { Redbar, Star, Wishlist } from '@ui/assets/Icons';
import { addToCart, toggleWishlist, useClient } from '@lib/Context';
import Picture from '@ui/components/Picture';
import { products } from '@lib/data';
import TimeLeft from './TimeLeft';

const ShowProducts: React.FC<ShowProductsProps> = ({
  list,
  title = [],
  time = false,
  viewAll = false,
  openAddToCart = false,
}) => {
  const {
    client: { wishlist },
    setClient,
  } = useClient();

  const items = products.filter((item: { id: number }) => (list.includes(item.id) ? item : false));

  // const addToWishlistHandle = (target: HTMLButtonElement, id: number) => {
  //   target.classList.add('[&_svg]:animate-[ping_.5s]');
  //   target.addEventListener('animationend', () => {
  //     target.classList.remove('[&_svg]:animate-[ping_.5s]');
  //   });
  //   toggleWishlist(setClient, id);
  // };

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
            <div className={`mb-12 mt-4 flex flex-col gap-6 sm:flex-row xl:gap-x-[5.35rem]`}>
              <h3 className="font-heading-semibold text-3xl tracking-[0.04em] lg:text-36">
                {title.length > 1 ? title[1] : title[0]}
              </h3>
              {time && <TimeLeft />}
            </div>
          </>
        )}

        {/* Products */}
        {items.length > 0 ? (
          /* Products Available */
          <div className="mt-[37px] grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 2xl:grid-cols-5">
            {items.map(({ id, name, rating, ratingCount, discount, price: realPrice }, index) => {
              const price = realPrice - Math.round((discount / realPrice) * 100);

              return (
                <figure key={index} className="group grid">
                  <div className="relative grid h-52 place-content-center overflow-hidden rounded bg-clr-Secondary lg:h-[250px]">
                    <Picture
                      src={`products/${id}.png`}
                      alt={name}
                      className="duration-200 group-hover:scale-110"
                      imgClassName="max-h-32 max-w-32 xl:max-h-none xl:max-w-none"
                    />
                    <div className="absolute inset-0 flex items-start justify-between p-3">
                      {discount > 0 && (
                        <span className="rounded bg-clr-ButtonRed px-1.5 py-1 text-[0.7rem] text-white lg:px-3 lg:text-xs">
                          -{discount}%
                        </span>
                      )}
                      {/* Wishlist */}
                      <button
                        className="isolate ml-auto grid aspect-square w-9 place-content-center rounded-full bg-white"
                        onClick={() => toggleWishlist(setClient, id)}
                      >
                        <Wishlist
                          className={`relative -z-10 ${wishlist.includes(id as never) ? '-z-10 fill-clr-ButtonRed text-clr-ButtonRed' : 'fill-none'}`}
                          width="24px"
                          height="24px"
                          strokeWidth="2"
                        />
                      </button>
                      <button
                        type="button"
                        className={`${openAddToCart ? '' : 'translate-y-full group-hover:translate-y-0'} absolute inset-0 top-auto bg-black py-3 font-medium text-xs text-white duration-200 hover:bg-clr-ButtonRed md:text-base`}
                        onClick={() => addToCart(setClient, id)}
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
        ) : (
          /* Products is Empty */
          <div className="rounded border px-10 py-8 text-center">
            <h2>Empty Products</h2>
          </div>
        )}
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
