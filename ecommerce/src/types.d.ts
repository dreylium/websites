import React from 'react';

declare global {
  type Client = {
    cart: {
      id: number;
      quantity: number;
    }[];
    wishlist: number[] | [];
    lastItem: {
      id: number;
      what: string;
    };
  };

  type UI = {
    openCart: boolean;
  };

  type ContextClientD = {
    client: Client;
    setClient: React.Dispatch<React.SetStateAction<Client>>;
  };

  type ContextUID = {
    ui: UI;
    setUI: React.Dispatch<React.SetStateAction<UI>>;
  };

  type ShowProductsProps = {
    list: number[];
    title?: string[];
    time?: boolean;
    button?: boolean;
    viewAll?: boolean;
    openAddToCart?: boolean;
  };

  interface Category {
    title: string;
    items: number[];
  }

  interface TimeLeft {
    Days: number;
    Hours: number;
    Minutes: number;
    Seconds: number;
  }
}
