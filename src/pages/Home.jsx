import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import Product from "../components/Product";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log("eroor ", err);
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center my-20 items-center min-h-screen">
      <div className="max-w-[1200px] py-5 px-3 mx-auto flex flex-wrap gap-5 justify-evenly">
        {loading ? (
          <GridLoader color="green" />
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="">
              <Product product={product} />
            </div>
          ))
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
