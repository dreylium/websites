import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const TopBanner = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`${pathname !== '/' && 'hidden'} relative z-40 bg-black p-6 py-4 text-sm text-clr-Text`}
    >
      <div className="relative mx-auto flex max-w-screen-2xl flex-col items-center justify-center leading-normal">
        <span className="flex flex-col items-center gap-x-2 text-center lg:flex-row">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="/shop" className="lg:blockfont-heading-semibold hidden leading-6 underline">
            ShopNow
          </Link>
        </span>
        {/* Language */}
        <button className="absolute hidden self-end lg:block">English</button>
      </div>
    </div>
  );
};

export default TopBanner;
