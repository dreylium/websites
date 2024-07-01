import { useClient } from '@lib/Context';
import ShowProducts from '@ui/components/ShowProducts';
import PopUpAddToCart from '@ui/components/PopUpAddToCart';

const Wishlist = () => {
  const {
    client: { wishlist },
  } = useClient();

  return (
    <div className="mx-auto max-w-screen-2xl px-[135px] py-20">
      <PopUpAddToCart />
      {wishlist.length > 0 ? (
        // Wishlist is not empty
        <ShowProducts title={['Wishlist']} list={wishlist} openAddToCart={true} />
      ) : (
        // Wishlist is empty
        <div className="rounded border px-10 py-8 text-center">
          <h2>Empty Wishlist</h2>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
