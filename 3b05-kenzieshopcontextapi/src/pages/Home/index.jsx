import React, { useEffect, useState } from "react";
import formatValue from "../../utils/formatValue";
import { CircularProgress } from "@mui/material";
import { Container, ProductList } from "./styles";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { useAuth } from "../../providers/AuthContext";
import { CartContext, addToCart } from "../../providers/cart/cart";
import { useContext } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  async function loadProducts() {
    const response = await api.get("/products/");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));
    setLoading(false);
    setProducts(data);
  }
  useEffect(() => {
    loadProducts();
  }, []);
  console.log(cart);
  const addCart = (product) => {
    addToCart(product);
    toast.success(`Produto adicionado!`);
  };

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Container>
        {loading ? (
          <div className="loading">
            <CircularProgress size={50} />
          </div>
        ) : (
          <ProductList>
            {products.map((product) => (
              <li key={product.id}>
                <figure>
                  <img src={product.image} alt={product.name} />
                </figure>
                <strong>{product.title}</strong>
                <div>
                  <span>{product.priceFormatted}</span>
                  <button type="button" onClick={() => addCart(product)}>
                    <span>Adicionar ao carrinho</span>
                  </button>
                </div>
              </li>
            ))}
          </ProductList>
        )}
      </Container>
    </motion.div>
  );
}
export default Home;
