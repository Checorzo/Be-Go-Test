import { useState } from 'react';
import './App.css';

import Header from './modules/header';
import Search from './modules/search';
import StatusOrder from './modules/status-order';
import OrderCard from './modules/order-card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <StatusOrder />
      <Search />
      <OrderCard />
    </>
  )
}

export default App
