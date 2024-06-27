import { useContext } from 'react';
import { products } from '@lib/data';
import { Context } from '@routes/Layout';

export default function ShowCart({ currentCart, totalCart }: ShowCartProps) {
  const { setState } = useContext(Context) as AppContext;

  const removeFromCartHandle = (id: number) => {
    setState((prevState) => {
      prevState.cart.splice(id, 1);
      return {
        ...prevState,
        cart: [...prevState.cart],
      };
    });
  };

  return (
    <div className="absolute right-0 top-full -z-10 rounded bg-white px-6 py-2 shadow-[0_0_2px_0_rgba(0,0,0,0.5)]">
      {currentCart.map(({ id: idx, quantity }: { id: number; quantity: number }, index: number) => {
        if (index <= 2) {
          const { id, name, price } = products[idx];
          return (
            <div
              key={index}
              className="grid grid-cols-[4rem_1fr_auto] items-center gap-x-8 border-b py-4"
            >
              <picture>
                <img src={`/images/products/${id}.png`} alt={name} className="mx-auto max-h-16" />
              </picture>
              <div className="grid gap-y-1">
                <p>{name}</p>
                <div className="flex justify-between">
                  <span>
                    ${price} x {quantity}
                  </span>
                  <span>${price * quantity}</span>
                </div>
              </div>
              <button
                className="group mx-4"
                type="button"
                onClick={() => removeFromCartHandle(index)}
              >
                <svg
                  className="stroke-clr-ButtonRed group-hover:stroke-red-700"
                  width="15.106"
                  height="22"
                  version="1.1"
                  viewBox="0 0 6.1136 7.9375"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" strokeWidth=".4" strokeLinejoin="round">
                    <rect
                      x=".1438"
                      y=".85049"
                      width="5.826"
                      height=".92218"
                      ry=".2196"
                      strokeLinecap="round"
                    />
                    <path
                      d="m2.4489 0.58167v-0.31391c0-0.07907 0.06472-0.14273 0.14512-0.14273h0.92556c0.0804 0 0.14512 0.06366 0.14512 0.14273v0.31391"
                      strokeLinecap="square"
                    />
                    <path
                      d="m5.2832 2.0603v5.3103c0 0.23444-0.18874 0.42318-0.42318 0.42318h-3.6065c-0.23444 0-0.42318-0.18874-0.42318-0.42318v-5.3103"
                      strokeLinecap="square"
                    />
                    <g strokeLinecap="round">
                      <path d="m3.0568 2.6494v4.5553" />
                      <path d="m4.2009 3.2184v3.4172" />
                      <path d="m1.9127 3.2184v3.4172" />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          );
        }
      })}
      {currentCart.length > 0 ? (
        <div className="flex flex-col gap-y-4 py-2">
          {currentCart.length > 3 && (
            <div className="flex flex-col text-center font-medium underline-offset-2">
              <a href="" className="pt-4 hover:underline">
                View All ({currentCart.length})
              </a>
            </div>
          )}
          <section className="flex items-center gap-x-2 py-1 text-lg">
            <h3 className="font-medium">Total: </h3>
            <p>${totalCart}</p>
          </section>
        </div>
      ) : (
        <div className="py-2 text-gray-500">Empty Cart</div>
      )}
    </div>
  );
}
