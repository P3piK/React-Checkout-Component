import React, { useState } from 'react';
import './App.css';
import { YourOrderPanel } from './Components/YourOrderPanel.js'
import PopularItemsPanel from './Components/PopularItemsPanel';
import {data, basket} from './data'

function App() {

  const [basketList, setBasketList] = useState(basket);
  const [itemList, setItemList] = useState(data);

  const updateQuantityHandler = (id, quantity) => {
    setBasketList((prevBasketList) => [...prevBasketList].map(i => {
      if (i.id === id) {
        return {
          ...i,
          quantity: quantity
        }
      }
      else return i;
    }));
  }

  const removeItemHandler = (id) => {
    setBasketList((prevBasketList) => [...prevBasketList].filter(i => i.id !== id))
  }

  const addToBasketHandler = (id) => {
    setItemList((prevItemList) => prevItemList.filter(i => i.id !== id));
    setBasketList((prevBasketList) => [...prevBasketList, {
      ...itemList.find(i => i.id === id), 
      quantity: 1}]);
  }


  return (
    <main>
      <PopularItemsPanel items={itemList} onAddToBasket={addToBasketHandler} />
      <YourOrderPanel items={basketList} onUpdateQuantity={updateQuantityHandler} onRemoveItem={removeItemHandler} />
    </main>
  );
}

export default App;
