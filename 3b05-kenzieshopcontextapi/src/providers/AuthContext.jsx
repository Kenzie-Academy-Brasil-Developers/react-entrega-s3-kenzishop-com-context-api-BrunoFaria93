import { useState, createContext, useContext } from "react";
import api from "../services/api";
// import { toast } from 'react-hot-toast'

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  // if (context === {}) {
  //   throw new Error("useAuth must be used within an AuthProvider");
  // }

  return context;
}

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {

    const token = localStorage.getItem("@Kenzieshop:token");
    const user = localStorage.getItem("@Kenzieshop:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = async (data) => {
    const response = await api.post("/sessions/", data);

    const token = response.data.access;

    const { username, password } = data;

    const user = {
      username: username,
      password: password
    }

    localStorage.setItem("@Kenzieshop:token", token);
    localStorage.setItem("@Kenzieshop:user", JSON.stringify(user));

    setData({ token });
    // toast.sucess(`Bem vindo!`);
  };

  const signOut = () => {
    localStorage.removeItem("@Kenzieshop:token");
    localStorage.removeItem("@Kenzieshop:user");

    setData({});
  };

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
