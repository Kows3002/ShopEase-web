import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Header from './components/Header';
import ProductList from './pages/ProductList';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  return (
    <>
      {token && <Header setToken={setToken} />}
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/product" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/product" /> : <Login setToken={setToken} />}
        />
        <Route
          path="/product"
          element={token ? <ProductList /> : <Navigate to="/login" />}
        />
        <Route
          path="/product/:id"
          element={token ? <ProductDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={token ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
