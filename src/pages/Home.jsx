import React, { useEffect, useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/header/productTile";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      // console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  // console.log(products);

  return (
    <>
      <div>
        {loading ? (
          <div className="min-h-screen w-full flex items-center justify-center">
            <Circles
              height={"120"}
              width={"120"}
              color="rgb(130, 30, 30)"
              visible={true}
            />
          </div>
        ) : (
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {products && products.length
              ? products.map((productItem) => (
                  <ProductTile key={productItem.id} product={productItem} />
                ))
              : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
