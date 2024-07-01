import { useClient } from '@lib/Context';
import { products } from '@lib/data';
import Picture from '@ui/components/Picture';
import { Trash } from '@ui/assets/Icons';
import { useMemo } from 'react';
import { sumCart } from '@lib/func';

const Cart = () => {
  const {
    client: { cart },
    setClient,
  } = useClient();

  const totalCart = useMemo(() => sumCart(cart), [cart]);

  const removeFromCartHandle = (id: number) => {
    setClient((prevState: Client) => {
      prevState.cart.splice(id, 1);
      return {
        ...prevState,
        cart: [...prevState.cart],
      };
    });
  };
  const changeQuantityHandle = (id: number, target: HTMLInputElement) => {
    console.log(target.value);
    if (target.value === '' || Number(target.value) < 1) target.value = String(cart[id].quantity);
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
    <div className="mx-auto max-w-screen-2xl px-[135px] py-20">
      {/* Empty Cart */}
      {cart.length > 0 ? (
        // Cart is not empty
        <>
          <div className="grid grid-cols-[2fr_repeat(2,minmax(0,1fr))_0.75fr_1rem] border-b border-gray-300 px-10 py-8 font-heading-semibold">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <div>
              <h2>Subtotal</h2>
            </div>
          </div>
          {/* Product */}
          <div className="grid gap-y-4 py-10">
            {cart.map(({ id: idx, quantity }: { id: number; quantity: number }, index: number) => {
              const { id, name } = products[idx];

              return (
                <div
                  className="grid h-20 grid-cols-[2fr_repeat(2,minmax(0,1fr))_0.75fr_1rem] items-center rounded border border-gray-300 px-10"
                  key={index}
                >
                  {/* image && Name */}
                  <div className="flex items-center gap-x-6">
                    <Picture
                      src={`products/${id}.png`}
                      className="grid aspect-square h-14 place-items-center"
                      imgClassName="max-h-14"
                      alt={name}
                    />
                    <span>{name}</span>
                  </div>
                  <span>${products[idx].price}</span>
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    onKeyDown={({ key, target }) => {
                      if (key === 'Enter') {
                        const current = target as HTMLInputElement;
                        changeQuantityHandle(index, current);
                        current.blur() as unknown as void;
                      }
                    }}
                    onBlur={({ target }) => changeQuantityHandle(index, target)}
                    className="w-20 rounded border p-2"
                  />
                  <span>$650</span>
                  <button
                    aria-label="Remove"
                    className="group isolate grid place-content-center p-1 hover:text-clr-ButtonRed"
                    onClick={() => removeFromCartHandle(index)}
                  >
                    <Trash />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between gap-10 py-10">
            <div className="grid h-12 grid-cols-[1fr_auto] gap-8">
              <input
                type="text"
                placeholder="Coupon code"
                className="rounded-md border border-gray-300 px-2"
              />
              <button className="rounded-md bg-clr-ButtonRed px-4 text-white">Apply Coupon</button>
            </div>
            <div className="grid w-full max-w-lg rounded border border-gray-300 p-8 leading-normal">
              <h2 className="font-medium text-xl">Cart Total</h2>
              {/* Subtotal */}
              <section className="flex justify-between border-b border-gray-300 py-4">
                <h2>Subtotal:</h2>
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
  );
};

export default Cart;
