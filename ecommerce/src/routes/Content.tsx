import { RedBar, BtnLeft, BtnRight } from '@ui/components/icons';
import { categories } from '@lib/data';
import ShowProducts from '@ui/components/ShowProducts';

const flashSale = [0, 1, 2, 3];
const bestSelling = [4, 5, 6, 7];
const exploreProduct = [8, 9, 10, 11, 12, 13, 14, 15];

export default function Content() {
  return (
    <div className="self-sretch flex flex-col items-center pt-[70px] [&>div]:w-full [&>div]:max-w-screen-2xl [&]:max-w-none">
      {/* Flash Sales */}
      <ShowProducts
        title={["Today's", 'Flash Sales']}
        list={flashSale}
        time={true}
        button={true}
      />

      {/* Categories */}
      <div className="border-b pb-[70px] pt-20">
        <h2 className="flex items-center gap-x-4 font-semibold tracking-[-0.02em] text-clr-ButtonRed">
          <RedBar />
          Categories
        </h2>
        <div className="mt-5 flex items-center justify-between gap-x-[5.35rem]">
          <h3 className="font-heading-semibold text-36 tracking-[0.04em]">Browse By Category</h3>
          <div className="flex gap-x-2">
            <button>
              <BtnLeft />
            </button>
            <button>
              <BtnRight />
            </button>
          </div>
        </div>
        {/* Items */}
        <div className="mt-[60px] flex justify-between gap-x-[30px] overflow-x-scroll">
          {categories.map(({ name, url, Icon }, index) => (
            <a
              href={url}
              key={index}
              className="grid w-[calc(16.6666667%-25px)] shrink-0 justify-center gap-y-4 rounded border border-[rgba(0,0,0,0.3)] py-[25px] hover:bg-clr-Secondary2 hover:text-white [&>svg]:mx-auto"
            >
              <Icon />
              <p className="mt-1 leading-[1.1]">{name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* This Month Wrapper */}
      <ShowProducts
        title={['This Month', 'Best Selling Products']}
        list={bestSelling}
        viewAll={true}
      />

      {/* Banner */}
      <div className="mt-[50px] bg-black">
        <div className="bg-blue-599 mx-auto grid max-w-screen-2xl grid-cols-[1fr_auto] items-center gap-x-[27px] px-14">
          <div className="gap-y-8 py-[70px] text-white">
            <h2 className="font-semibold leading-[1.25rem] tracking-[-0.02em] text-clr-ButtonGreen">
              Categories
            </h2>
            <h3 className="mt-[30px] font-heading-semibold text-48 leading-[1.25] tracking-[0.04em]">
              Enhance Your Music Experience
            </h3>
            <div className="mt-8 flex gap-x-6">
              <p className="grid h-[62px] w-[62px] place-content-center rounded-full bg-white text-center text-[11px] text-black">
                <span className="font-semibold text-base">23</span>
                Hours
              </p>
              <p className="grid h-[62px] w-[62px] place-content-center rounded-full bg-white text-center text-[11px] text-black">
                <span className="font-semibold text-base">05</span>
                Days
              </p>
              <p className="grid h-[62px] w-[62px] place-content-center rounded-full bg-white text-center text-[11px] text-black">
                <span className="font-semibold text-base">59</span>
                Minutes
              </p>
              <p className="grid h-[62px] w-[62px] place-content-center rounded-full bg-white text-center text-[11px] text-black">
                <span className="font-semibold text-base">35</span>
                Seconds
              </p>
            </div>
            <a
              href=""
              className="mt-10 inline-block rounded bg-clr-ButtonRed px-12 py-5 font-medium"
            >
              Buy Now!
            </a>
          </div>
          <picture className="grid h-full place-content-center rounded-full bg-[radial-gradient(rgb(217,217,217,0.3)_30%,transparent_80%)]">
            <source srcSet="/min/products/boombox.avif" type="image/avif" />
            <img src="/min_webp/products/boombox.webp" alt="" />
          </picture>
        </div>
      </div>
      {/* Our Products Wrapper */}
      <ShowProducts title={['Our Products', 'Explore Our Products']} list={exploreProduct}  />

      {/* New Arrival Wrapper */}
      <div className="py-[70px]">
        <h2 className="flex items-center gap-x-4 font-semibold tracking-[-0.02em] text-clr-ButtonRed">
          <RedBar />
          Featured
        </h2>
        <div className="mt-3 flex items-center justify-between gap-x-[5.35rem]">
          <h3 className="mt-3.5 font-heading-semibold text-36 tracking-[0.04em]">New Arrival</h3>
          <div className="flex gap-x-2">
            <button>
              <BtnLeft />
            </button>
            <button>
              <BtnRight />
            </button>
          </div>
        </div>
        {/* Items */}
        <div className="mt-[66px] grid grid-cols-4 grid-rows-2 gap-x-[30px] gap-y-8 text-white">
          <figure className="group relative col-span-2 row-span-2 flex items-end overflow-hidden bg-black">
            <div className="grid min-h-[250px] place-content-center rounded px-[30px] pt-[89px]">
              <picture>
                <source srcSet="/min/products/ps5.avif" type="image/avif" />
                <img
                  src="/min/products/ps5.webp"
                  alt="playstation 5"
                  className="duration-700 group-hover:scale-105"
                />
              </picture>
            </div>
            <figcaption className="absolute bottom-8 left-8 leading-[1.5]">
              <h2 className="mb-2 font-heading-semibold text-2xl tracking-[0.03em]">
                PlayStation 5
              </h2>
              <p className="mb-4 max-w-[30ch] text-sm">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a href="/" className="font-medium underline underline-offset-[6px]">
                Shop Now
              </a>
            </figcaption>
          </figure>
          <figure className="group relative col-span-2 flex items-end justify-end overflow-hidden bg-black">
            <div className="grid min-h-[250px] place-content-center rounded">
              <picture>
                <source srcSet="/min/products/women_hat.avif" type="image/avif" />
                <img
                  src="/min_webp/products/women_hat.webp"
                  alt="women het"
                  className="duration-700 group-hover:scale-105"
                />
              </picture>
            </div>
            <figcaption className="absolute bottom-6 left-6 leading-[1.5]">
              <h2 className="mb-2 font-heading-semibold text-2xl tracking-[0.03em]">
                Women’s Collections
              </h2>
              <p className="mb-4 max-w-[30ch] text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <a href="/" className="font-medium underline underline-offset-[6px]">
                Shop Now
              </a>
            </figcaption>
          </figure>
          <figure className="group relative flex items-center justify-center overflow-hidden bg-black">
            <div className="grid min-h-[250px] place-content-center rounded">
              <picture>
                <source srcSet="/min/products/3_speaker.avif" type="image/avif" />
                <img
                  src="/min/products/3_speaker.webp"
                  alt="speaker"
                  className="duration-700 group-hover:scale-105"
                />
              </picture>
            </div>
            <figcaption className="absolute bottom-6 left-6 leading-[1.5]">
              <h2 className="font-heading-semibold text-2xl tracking-[0.03em]">Speakers</h2>
              <p className="mb-2 max-w-[30ch] text-sm">Amazon wireless speakers</p>
              <a href="/" className="font-medium underline underline-offset-[6px]">
                Shop Now
              </a>
            </figcaption>
          </figure>
          <figure className="group relative flex items-center justify-center overflow-hidden bg-black">
            <div className="grid min-h-[250px] place-content-center rounded">
              <picture>
                <source srcSet="/min/products/perfume.avif" type="image/avif" />
                <img
                  src="/min/products/perfume.webp"
                  alt="perfume"
                  className="duration-700 group-hover:scale-105"
                />
              </picture>
            </div>
            <figcaption className="absolute bottom-6 left-6 leading-[1.5]">
              <h2 className="font-heading-semibold text-2xl tracking-[0.03em]">Perfume</h2>
              <p className="mb-2 max-w-[30ch] text-sm">GUCCI INTENSE OUD EDP</p>
              <a href="/" className="font-medium underline underline-offset-[6px]">
                Shop Now
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
      {/* Benefit */}
      <div className="flex justify-center gap-x-[88px] py-[70px]">
        <section className="flex flex-col items-center text-center">
          <img src="/min/icons/delivery.svg" alt="delivery" />
          <h2 className="mt-7 font-semibold text-xl">FREE AND FAST DELIVERY</h2>
          <p className="mt-3.5 text-sm">Free delivery for all orders over $140</p>
        </section>
        <section className="flex flex-col items-center text-center">
          <img src="/min/icons/cs.svg" alt="customer service" />
          <h2 className="mt-7 font-semibold text-xl">24/7 CUSTOMER SERVICE</h2>
          <p className="mt-3.5 text-sm">Friendly 24/7 customer support</p>
        </section>
        <section className="flex flex-col items-center text-center">
          <img src="/min/icons/money_back.svg" alt="customer service" />
          <h2 className="mt-7 font-semibold text-xl">MONEY BACK GUARANTEE</h2>
          <p className="mt-3.5 text-sm">We reurn money within 30 days</p>
        </section>
      </div>
    </div>
  );
}
