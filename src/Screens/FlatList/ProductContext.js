import React, {createContext, useContext, useState} from 'react';

const productContext = createContext();
export const useCart = () => {
  return useContext(productContext);
};
const ProductContext = ({children}) => {
  const [cart, setCart] = useState([]);
  return (
    <productContext.Provider value={{cart, setCart}}>
      {children}
    </productContext.Provider>
  );
};
export default ProductContext;
