import { useProducts, useUI } from '@lib/Context';
import { useMemo } from 'react';
import Picture from './Picture';
import { Link } from 'react-router-dom';
import { searchProducts } from '@lib/func';

const ShowSearch: React.FC<{ currentRef: React.RefObject<HTMLDivElement>; search: string }> = ({
  currentRef,
  search,
}) => {
  const { products } = useProducts();
  const {
    ui: { openSearch },
  } = useUI();
  const items = useMemo(() => searchProducts(products, search), [search, products]);

  return (
    <div
      className={`absolute right-0 sm:right-1 min-w-[240px] top-full -z-10 rounded bg-white py-3 text-sm shadow-[0_0_2px_0_rgba(0,0,0,0.5)] duration-300 md:text-base ${openSearch ? 'translate-y-[calc(0%+1rem)] opacity-100' : '-translate-y-full opacity-0'}`}
      ref={currentRef}
    >
      <section className="max-h-[50vh] overflow-y-scroll">
        {items.map(({ id, name, price }) => (
          <Link
            key={id}
            className="flex items-center gap-6 border-b px-6 py-2 hover:text-clr-ButtonRed"
            to={`/products/${id}`}
          >
            <Picture src={`products/${id}.png`} alt={name} imgClassName="size-10 object-contain" />
            <h3>{name}</h3>
            <p className="ml-auto">${price}</p>
          </Link>
        ))}
      </section>
      <Link
        to="/search"
        className="!hidden mx-4 mt-4 %block rounded bg-clr-ButtonRed p-4 text-center text-white"
      >
        View All
      </Link>
    </div>
  );
};

export default ShowSearch;
