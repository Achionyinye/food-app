import './App.css';
import { useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider'

function App() {

  const [closeModal, setCloseModal] = useState(false)

  const showCartHandler = () => {
    setCloseModal(true)
  }

  const hideCartHandler = () => {
    setCloseModal(false)
  }

  return (
    <CartProvider>
    {closeModal && <Cart onHideCart={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <main>
      <Meals />
    </main>
    </CartProvider>
  );
}

export default App;
