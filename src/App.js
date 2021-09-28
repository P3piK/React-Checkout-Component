import React, { useState } from 'react';
import './App.css';
import YourOrderPanel from './Components/YourOrderPanel.js'
import {data, basket} from './data'

function App() {

  const [basketList, setBasketList] = useState(basket);
  const [itemList, setItemList] = useState(data);

  const updateQuantity = (id, quantity) => {
    setBasketList([...basketList].map(i => 
      {
        if (quantity < 0)
          return i;
        if (i.id === id)
        {
          return {
            ...i,
            quantity: quantity
          }
        }
        else return i;
      }))
  }

  return (
    <main>
      <YourOrderPanel className="orderPanel" items={basketList} updateQuantity={updateQuantity} />


      <PopularItemsPanel className="popularPanel" items={itemList} handleChange={setItemList} />
    </main>
  );
}

function PopularItemsPanel(props) {
  return (
    <>
      <h4>Popular with your order ({props.items.length} items)</h4>
      <PopularItemList className="popularItemList" itemList={props.items} />
    </>
  )
}

function PopularItemList(props) {
  return (
    <>
      { props.itemList.map((item) => {
          return <PopularItem key={item.id} className="popularItem" item={item} />
      })} 
    </>
  )
}

function PopularItem(props) {
  const {name, price} = props.item;

  return (
  <>
    <h5>{name}</h5>
    <h5>${price}</h5>
    <button>+ Add to order</button>
  </>);
}

export default App;
