import Picture from '@ui/components/Picture';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { products } from '@lib/data';
import { Star, Wishlist } from '@ui/assets/Icons';

const Contact = () => {
  const { id } = useParams();
  const { name, rating, ratingCount, price, stock, info } = products[Number(id)];

  return (
    <div className="px-[135px] py-20">
      <div className="mx-auto grid max-w-screen-2xl gap-8 lg:grid-cols-[1fr_auto]">
        {/* Image */}
        <div className="grid gap-8 2xl:grid-cols-[170px_1fr]">
          {/* Main Image */}
          <div className="grid min-h-96 place-content-center bg-clr-Secondary p-6 2xl:order-2">
            <Picture
              src={`products/${id}.png`}
              alt={name}
              className=""
              imgClassName="h-full mx-auto"
            />
          </div>
          {/* Side Image */}
          <div className="flex gap-4 2xl:flex-col">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                type="button"
                key={index}
                className="grid h-[140px] w-[calc(25%-12px)] shrink-0 place-content-center rounded bg-clr-Secondary 2xl:w-auto"
              >
                <Picture
                  src={`products/${id}.png`}
                  alt={name}
                  imgClassName="max-h-[100px] max-w-[100px]"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Informationn */}
        <section className="max-w-[400px]">
          {/* Name && Price && Description */}
          <h2>{name}</h2>
          <div className="flex">
            <Star count={rating} />
            <p>({ratingCount} Reviews) |</p>
            <p>{stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          <h3>${price}</h3>
          <p>{info}</p>
          {/* Variants */}
          <div>
            <h2>Variants:</h2>
            <div>0 0</div>
          </div>
          {/* Size */}
          <div className="flex">
            <h2>Size: </h2>
            <button type="button">XS</button>
            <button type="button">S</button>
          </div>
          {/* Quantity && Add to cart */}
          <div className="flex">
            <div className="flex">
              <h2>Quantity: </h2>
              <div>
                <button type="button">-</button>
                <input type="number" />
                <button type="button">+</button>
              </div>
            </div>
            <button type="button">Add to cart</button>
            <button type="button">
              <Wishlist />
            </button>
          </div>
          {/* Benefit */}
          <div>
            <section className="grid grid-cols-[auto_1fr] grid-rows-2">
              <Wishlist className="row-span-2" />
              <h3>Free Delivery</h3>
              <Link to="/">Enter your postal code for Delivery Availability</Link>
            </section>
            <section className="grid grid-cols-[auto_1fr] grid-rows-2">
              <Wishlist className="row-span-2" />
              <h3>Return Delivery</h3>
              <p>
                Free 30 Days Delivery Returns.
                <Link to="/">Details</Link>
              </p>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
