import { useClient } from '@lib/Context';
import { useEffect, useState, useRef, useMemo } from 'react';
import { products } from '@lib/data';

const PopUpAddToCart = () => {
  const {
    client: { cart },
  } = useClient();
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef<number | null>(null);
  const element = useRef(null);

  useEffect(() => {
    setLoading(true);
  }, []);

  const nameCount = useMemo(() => {
    if (cart.length > 0)
      return `${products[cart[0]!.id].name} (x${cart[0]?.quantity}) added to cart`;
    else return 'Cart is empty';
  }, [cart]);

  useEffect(() => {
    if (loading) {
      setPopUp(true);
      clearTimeout(timer.current as number);
      timer.current = setTimeout(() => {
        setPopUp(false);
      }, 2000);
    }
  }, [cart]);

  return (
    <div
      ref={element}
      className={`${popUp ? '-translate-y-32 opacity-100' : 'opacity-30'} fixed right-1/2 top-full z-40 mx-auto translate-x-1/2 rounded bg-green-900 px-8 py-4 text-center font-medium text-white duration-700`}
    >
      {nameCount}
    </div>
  );
};

export default PopUpAddToCart;
