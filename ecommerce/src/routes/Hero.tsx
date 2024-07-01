import { ButtonRight, Owl } from '@ui/assets/Icons';
import Picture from '@ui/components/Picture';

export default function Hero() {
  return (
    <div className="xl:px-[135px]">
      <div className="mx-auto grid max-w-screen-2xl xl:grid-cols-[1fr_2.5fr]">
        {/* Wrapper */}
        <div className="border-[rgb(0,0,0,0.3)] lg:pt-10 xl:order-2 xl:border-l xl:ps-[44px]">
          <div className="relative mx-auto grid max-w-screen-lg justify-center bg-black sm:grid-cols-[auto_1fr] xl:justify-between">
            <section className="flex flex-col gap-y-[1.2rem] p-8 text-white xl:ps-[64px] xl:pt-[58px]">
              <div className="flex items-center gap-x-6">
                <picture>
                  <source srcSet="/min/logo_apple.avif" type="image/avif" />
                  <img src="/min_webp/logo_apple.webp" alt="apple" />
                </picture>
                <h2 className="mt-0.5">iPhone 14 Series</h2>
              </div>
              <h3 className="font-heading-semibold text-4xl leading-tight tracking-[.04em] md:text-48">
                Up to 10%
                <br />
                off Voucher
              </h3>
              <a href="/" className="flex items-center gap-x-2 font-medium text-lg underline">
                Shop Now
                <ButtonRight width={24} height={24} />
              </a>
            </section>
            <div className="m-auto pt-4">
              <Picture src="/hero_phone.png" alt="iphone 14 series" />
            </div>
            {/* Owl */}
            <div className="absolute bottom-2.5 flex w-full items-center justify-center gap-x-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <button type="button" key={index}>
                  <Owl current={index === 2} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid min-w-[217px] grid-cols-2 gap-y-4 py-10 text-center text-sm leading-6 sm:grid-cols-3 md:grid-cols-4 md:text-base xl:grid-cols-1 xl:gap-0 xl:text-left [&_a:hover]:bg-clr-Secondary2 [&_a:hover]:text-white [&_a]:px-1 [&_a]:py-2 [&_a]:md:px-5">
          <a href="/">Woman’s Fashion</a>
          <a href="/">Men’s Fashion</a>
          <a href="/">Electronics</a>
          <a href="/">Home &amp; Lifestyle</a>
          <a href="/">Medicine</a>
          <a href="/">Sports &amp; Outdoor</a>
          <a href="/">Baby’s &amp; Toys</a>
          <a href="/">Groceries &amp; Pets</a>
          <a href="/">Health &amp; Beauty</a>
        </div>
      </div>
    </div>
  );
}
