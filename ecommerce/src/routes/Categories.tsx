import { categories } from '@lib/data';
import { Redbar } from '@ui/assets/Icons';

const Categories = () => {
  return (
    <div className="border-b pb-[70px] pt-20">
      <h2 className="flex items-center gap-x-4 font-semibold tracking-[-0.02em] text-clr-ButtonRed">
        <Redbar />
        Categories
      </h2>
      <div className="mt-5 flex items-center justify-between gap-x-[5.35rem]">
        <h3 className="font-heading-semibold text-36 tracking-[0.04em]">Browse By Category</h3>
        <div className="flex gap-x-2">
          <button></button>
          <button></button>
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
  );
};

export default Categories;
