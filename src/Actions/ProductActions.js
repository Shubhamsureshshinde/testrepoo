export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products
  };
};

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};

export const updateProduct = (id, updatedProduct) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: { id, updatedProduct }
  };
};
