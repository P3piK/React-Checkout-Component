import React, { useState } from 'react';
import './App.css';
import { YourOrderPanel } from './Components/YourOrderPanel.js'
import PopularItemsPanel from './Components/PopularItemsPanel';
import {data, basket} from './data'

function App() {

  const [basketList, setBasketList] = useState(basket);
  const [itemList, setItemList] = useState(data);

  const updateQuantity = (id, quantity) => {
    setBasketList([...basketList].map(i => {
      if (i.id === id) {
        return {
          ...i,
          quantity: quantity
        }
      }
      else return i;
    }));
  }

  const removeItem = (id) => {
    setBasketList([...basketList].filter(i => i.id !== id))
  }

  const addToBasket = (id) => {
    setItemList(itemList.filter(i => i.id !== id));
    setBasketList([...basketList, {
      ...itemList.find(i => i.id === id), 
      quantity: 1}]);
  }


  return (
    <main>
      <PopularItemsPanel items={itemList} handleChange={addToBasket} />
      <YourOrderPanel items={basketList} updateQuantity={updateQuantity} removeItem={removeItem} />
    </main>
  );
}

export default App;
