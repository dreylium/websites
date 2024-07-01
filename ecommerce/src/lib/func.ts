import { products } from './data';
export function getFlashSaleTime() {}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const sumCart = (arr: Client['cart']) => {
  const result = arr.reduce((total: number, { id, quantity }: { id: number; quantity: number }) => {
    const price =
      products[id].price - Math.round((products[id].discount / products[id].price) * 100);
    return total + price * quantity;
  }, 0);
  return result;
};

export { scrollTop, sumCart };
