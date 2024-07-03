import { useClient, removeFromCart } from '@lib/Context';
import { products } from '@lib/data';
import Picture from '@ui/components/Picture';
import { Trash } from '@ui/assets/Icons';
import { useMemo } from 'react';
import { sumCart } from '@lib/func';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    client: { cart },
    setClient,
  } = useClient();

  const totalCart = useMemo(() => sumCart(cart), [cart]);

  const changeQuantityHandle = (id: number, target: HTMLInputElement) => {
    if (
      target.value === '' ||
      Number(target.value) < 1 ||
      Number(target.value) > products[id].stock
    )
      target.value = String(cart[id].quantity);
    else
      setClient((state: Client) => {
        state.cart[id].quantity = Number(target.value);
        return {
          ...state,
          cart: [...state.cart],
        };
      });
  };

  return (
    <div className="layout-px">
      <div className="mx-auto max-w-screen-2xl py-6 lg:py-20">
        {cart.length > 0 ? (
          // Cart is not empty
          <>
            <div className="hidden grid-cols-[2fr_repeat(2,minmax(0,1fr))_0.75fr_1rem] border-b border-gray-300 px-10 py-8 font-heading-semibold lg:grid">
              <h2>Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <div>
                <h2>Subtotal</h2>
              </div>
            </div>
            {/* Product */}
            <div className="grid gap-y-2 lg:gap-y-4 lg:py-10">
              {cart.map(
                ({ id: idx, quantity }: { id: number; quantity: number }, index: number) => {
                  const { id, name } = products[idx];
                  const totalPrice = products[idx].price * quantity;

                  return (
                    <div
                      className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-4 rounded border border-gray-300 px-4 py-2 lg:h-20 lg:grid-cols-[2fr_repeat(2,minmax(0,1fr))_0.75fr_1rem] lg:gap-0 lg:px-10"
                      key={index}
                    >
                      {/* image && Name */}
                      <Link
                        to={`/products/${id}`}
                        className="col-span-4 flex items-center justify-between gap-4 lg:col-auto lg:justify-start lg:gap-x-6"
                      >
                        <Picture
                          src={`products/${id}.png`}
                          className="grid aspect-square h-14 place-items-center"
                          imgClassName="max-h-14"
                          alt={name}
                        />
                        <span>{name}</span>
                      </Link>
                      <span className="ps-2">${products[idx].price}</span>
                      <input
                        type="number"
                        name="quantity"
                        className="w-full max-w-12 rounded border p-2 text-center lg:max-w-20"
                        defaultValue={quantity}
                        onKeyDown={({ key, target }) => {
                          if (key === 'Enter') {
                            const current = target as HTMLInputElement;
                            current.blur();
                          }
                        }}
                        onBlur={({ target }) => changeQuantityHandle(index, target)}
                      />
                      <span>${totalPrice}</span>
                      <button
                        aria-label="Remove"
                        className="group isolate grid place-content-center p-1 hover:text-clr-ButtonRed"
                        onClick={() => removeFromCart(setClient, index, idx)}
                      >
                        <Trash />
                      </button>
                    </div>
                  );
                },
              )}
            </div>
            <div className="flex flex-wrap justify-between gap-10 py-10">
              <div className="grid h-12 grid-cols-[1fr_auto] gap-8">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="rounded-md border border-gray-300 px-2"
                />
                <button className="rounded-md bg-clr-ButtonRed px-4 text-white">
                  Apply Coupon
                </button>
              </div>
              <div className="grid w-full max-w-lg rounded border border-gray-300 p-8 leading-normal">
                <h2 className="font-medium text-xl">Cart Total</h2>
                {/* Subtotal */}
                <section className="flex justify-between border-b border-gray-300 py-4">
                  <h2>Total:</h2>
                  <p>${totalCart}</p>
                </section>
                {/* Shipping */}
                <section className="flex justify-between border-b border-gray-300 py-4">
                  <h2>Shipping:</h2>
                  <p>Free</p>
                </section>
                {/* Total */}
                <section className="flex justify-between py-4">
                  <h2>Total:</h2>
                  <p>${totalCart}</p>
                </section>
                <button className="rounded-md bg-clr-ButtonRed p-4 font-medium text-white">
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          // Cart is empty
          <div className="rounded border px-10 py-8 text-center">
            <h2>Empty Cart</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
