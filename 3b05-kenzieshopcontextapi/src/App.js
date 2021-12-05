import React from 'react'
import Header from './components/Header'
import Routes from './routes'
import GlobalStyle from './styles/global'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
