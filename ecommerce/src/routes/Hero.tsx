export default function Hero() {
  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-[1fr_auto] grid-rows-1">
      <div className="grid min-w-[217px] gap-y-4 pe-4 pt-10 leading-6">
        <a href="/" className="flex items-center justify-between">
          Woman’s Fashion
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
              fill="black"
            />
          </svg>
        </a>
        <a href="/" className="flex items-center justify-between">
          Men’s Fashion
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
              fill="black"
            />
          </svg>
        </a>
        <a href="/">Electronics</a>
        <a href="/">Home & Lifestyle</a>
        <a href="/">Medicine</a>
        <a href="/">Sports & Outdoor</a>
        <a href="/">Baby’s & Toys</a>
        <a href="/">Groceries & Pets</a>
        <a href="/">Health & Beauty</a>
      </div>
      <div className="border-l border-[rgb(0,0,0,0.3)] ps-[44px] pt-10">
        <div className="relative grid w-[892px] grid-cols-[1fr_auto] bg-black">
          <section className="flex flex-col gap-y-[1.2rem] ps-[64px] pt-[58px] text-white">
            <div className="flex items-center gap-x-6">
              <img src="/images/logo_apple.png" alt="apple" />
              <h2 className="mt-0.5">iPhone 14 Series</h2>
            </div>
            <h3 className="font-heading-semibold text-48 leading-tight tracking-[.04em]">
              Up to 10% off Voucher
            </h3>
            <a
              href="/"
              className="flex items-center gap-x-2 px-[0.2rem] py-1 font-medium underline underline-offset-8"
            >
              Shop Now
              <img src="/images/icons/arrow_right.svg" alt="arrow right" />
            </a>
          </section>
          <div className="pt-4">
            <img src="/images/hero_phone.png" alt="iphone 14 series" />
          </div>
          {/* Owl */}
          <div className="absolute bottom-2.5 flex w-full items-center justify-center gap-x-3">
            {Array.from({ length: 5 }).map((_, index) => {
              if (index === 2)
                return (
                  <svg
                    key={index}
                    className="rounded-full border-2 border-white"
                    width="14"
                    height="14"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="#DB4444" />
                  </svg>
                );
              return (
                <svg
                  key={index}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.5" cx="6" cy="6" r="6" fill="white" />
                </svg>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
