import React, { useEffect, useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
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

  return (
    <>
      <div>
        {loading && (
          <div className="min-h-screen w-full flex items-center justify-center">
            <Circles
              height={"120"}
              width={"120"}
              color="rgb(130, 30, 30)"
              visible={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
