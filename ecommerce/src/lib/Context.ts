import { createContext, useContext } from 'react';

const ContextClient = createContext<ContextClientD | Record<string, never>>({});
const ContextUI = createContext<ContextUID | Record<string, never>>({});

const useClient = () => {
  const { client, setClient } = useContext(ContextClient);
  return { client, setClient };
};
const useUI = () => {
  const { ui, setUI } = useContext(ContextUI);
  return { ui, setUI };
};
export { ContextClient, ContextUI };
export { useClient, useUI };
