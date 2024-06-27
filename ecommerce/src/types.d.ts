declare interface State {
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

declare type AppContext = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

declare type ShowProductsProps = {
  title: string[];
  list: number[];
  time?: boolean;
  button?: boolean;
  viewAll?: boolean;
}
declare interface ShowCartProps {
  currentCart: State['cart'];
  totalCart: number;
}

