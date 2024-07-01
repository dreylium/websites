import Picture from '@ui/components/Picture';

const Banner = () => {
  return (
    <div className="mt-[50px] bg-black px-6 pb-8">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-x-[27px] lg:grid-cols-[1fr_auto] lg:px-14">
        <div className="gap-y-8 py-[70px] text-white">
          <h2 className="font-semibold leading-[1.25rem] tracking-[-0.02em] text-clr-ButtonGreen">
            Categories
          </h2>
          <h3 className="mt-[30px] font-heading-semibold text-24 leading-[1.25] tracking-[0.04em] xl:text-48">
            Enhance Your Music Experience
          </h3>
          <div className="mt-8 flex gap-x-6">
            {Object.entries({
              Days: 3,
              Hours: 23,
              Minutes: 13,
              Seconds: 19,
            }).map(([key, value]) => (
              <p className="grid h-[62px] w-[62px] place-content-center rounded-full bg-white text-center text-[11px] text-black">
                <span className="font-semibold text-base">{value < 10 ? `0${value}` : value}</span>
                {key}
              </p>
            ))}
          </div>
          <a href="" className="mt-10 inline-block rounded bg-clr-ButtonRed px-12 py-5 font-medium">
            Buy Now!
          </a>
        </div>
        <Picture
          src="products/boombox.png"
          alt="boombox"
          className="grid h-full place-content-center rounded-full bg-[radial-gradient(rgb(217,217,217,0.3)_30%,transparent_80%)]"
        />
      </div>
    </div>
  );
};

export default Banner;
