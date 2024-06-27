interface State {
  cart:
    | [
        {
          id: number;
          quantity: number;
        },
      ]
    | [];
  wishlist: number[] | [];
}

export default async function fetchData(state: State) {
  const data = await fetch('http://localhost:3000/', {
    method: 'get',
  });
  console.log(data, state);
}
