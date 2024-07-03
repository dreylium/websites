import { products } from '@lib/data';
import ShowProducts from '@ui/components/ShowProducts';
import { useParams } from 'react-router-dom';
import { categoryName } from '@lib/data';

const Category = () => {
  const { ids } = useParams();
  const list = products.filter(({ category }) => category === ids).map(({ id }) => id);
  const title = categoryName[ids as keyof typeof categoryName];

  return (
    <div>
      <div className="mx-auto max-w-screen-2xl">
        <ShowProducts title={['Category', title]} list={list} />
      </div>
    </div>
  );
};

export default Category;
