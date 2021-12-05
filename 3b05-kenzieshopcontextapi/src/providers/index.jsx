import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./cart/cart";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
        <CartProvider>{children}</CartProvider>
    </AuthProvider>
  )
};

export default Providers;