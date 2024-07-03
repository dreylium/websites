import { useClient } from '@lib/Context';
import { useEffect, useState, useRef, useMemo } from 'react';
import { products } from '@lib/data';

const PopUpAddToCart = () => {
  const {
    client: { cart, lastItem },
  } = useClient();
  const [popUp, setPopUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [color, setColor] = useState('bg-green-900');
  const timer = useRef<number>(0);

  useEffect(() => {
    setLoading(true);
  }, []);

  const text = useMemo(() => {
    if (loading) {
      setPopUp(true);
      clearTimeout(timer.current as number);
      timer.current = setTimeout(() => {
        setPopUp(false);
      }, 2000);
    }

    switch (lastItem.what) {
      case 'addToCart':
        setColor('bg-green-700');
        return `${products[lastItem.id].name} (${cart[0]?.quantity}) added to cart`;
      case 'removeFromCart':
        setColor('bg-green-700');
        return `${products[lastItem.id].name} removed from cart`;
      case 'addToWishlist':
        setColor('bg-red-500');
        return `${products[lastItem.id].name} added to wishlist`;
      case 'removeFromWishlist':
        setColor('bg-red-500');
        return `${products[lastItem.id].name} removed to wishlist`;
      default:
        return 'empty';
    }
  }, [lastItem]);

  return (
    <div
      className={`${popUp ? '-translate-y-20 opacity-100 lg:-translate-y-32' : 'opacity-30'} fixed top-full z-40 flex w-full justify-center rounded text-center font-medium text-sm text-white transition-transform duration-500 lg:text-base`}
    >
      <span className={`${color} block px-8 py-4`}>{text}</span>
    </div>
  );
};

export default PopUpAddToCart;
