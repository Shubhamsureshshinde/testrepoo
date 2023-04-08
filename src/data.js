import React, { useState, useEffect } from "react";
import AddingDataproducts from "./AddingDataproducts";

export default function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const postData = await response.json();
      setData(postData);
    };
    fetchPosts();
  }, []);
  console.log(data.products);
  const handleAddProduct = (newProduct) => {
    setData({ ...data, products: [...data.products, newProduct] });
  };
  const useData = data.products?.map((data) => {
    return (
      <div>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
      </div>
    );
  });

  return (
    <div>
      <AddingDataproducts onAddProduct={handleAddProduct} />
      {useData}
    </div>
  );
}
