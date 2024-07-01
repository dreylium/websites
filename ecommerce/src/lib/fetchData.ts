const fetchProducts = async () => {
  const data = await fetch('http://localhost:3000/api/products', {
    method: 'get',
  });
  const json = await data.json();
  console.log(json);
};
export { fetchProducts };
