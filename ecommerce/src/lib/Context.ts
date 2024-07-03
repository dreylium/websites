import { createContext, useContext } from 'react';
import { products } from './data';

const ContextClient = createContext<ContextClientD | Record<string, never>>({});
const ContextUI = createContext<ContextUID | Record<string, never>>({});

const useClient = () => {
  const { client, setClient } = useContext(ContextClient);
  return { client, setClient };
};
const useUI = () => {
  const { ui, setUI } = useContext(ContextUI);
  return { ui, setUI };
};
const addToCart = (setClient: ContextClientD['setClient'], id: number, addQuantity: number = 1) => {
  setClient((prevState: Client) => {
    const isExist = prevState.cart.findIndex((item: { id: number }) => item.id === id);
    const product = products.find((item: { id: number }) => item.id === id);
    let quantity: number;
    if (isExist < 0) quantity = addQuantity;
    else {
      const [{ quantity: q }] = prevState.cart.splice(isExist, 1);
      quantity = q + addQuantity;
    }

    if (quantity > product!.stock) quantity = product!.stock;

    return {
      ...prevState,
      cart: [{ id, quantity }, ...prevState.cart],
      lastItem: {
        id,
        what: 'addToCart',
      },
    };
  });
};

const removeFromCart = (setClient: ContextClientD['setClient'], id: number, idx: number) => {
  setClient((prevState: Client) => {
    prevState.cart.splice(id, 1);
    return {
      ...prevState,
      cart: [...prevState.cart],
      lastItem: {
        id: idx,
        what: 'removeFromCart',
      },
    };
  });
};
const toggleWishlist = (setClient: ContextClientD['setClient'], id: number) => {
  setClient((prevState: Client) => {
    const isExist: boolean = prevState.wishlist.includes(id as never);
    return {
      ...prevState,
      wishlist: isExist
        ? [...prevState.wishlist.filter((item) => item !== id)]
        : [...prevState.wishlist, id],
      lastItem: { id, what: isExist ? 'removeFromWishlist' : 'addToWishlist' },
    };
  });
};

export { ContextClient, ContextUI };
export { useClient, useUI, addToCart, removeFromCart, toggleWishlist };
