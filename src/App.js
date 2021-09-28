import React, { useState } from 'react';
import './App.css';
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

  const totalPrice = () => {
    let sum = 0;
    basketList.map(i => {
      sum = sum + i.quantity * i.price;
    })

    return sum;
  }

  return (
    <main>

      <div className="orderPanel">
        <h3>Your order ({basketList.length} items)</h3>
        <div className="orderedItemList">
          { basketList.map((item) => {
            return <div key={item.id} className="orderedItem">
                <h4>{item.name}</h4>
                <p>{item.price * item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <h3>{item.quantity}</h3>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          })}
        </div>
        <h5 className="orderPanelLeft">Subtotal<span className="orderPanelRight">${totalPrice()}</span></h5>
        <h5 className="orderPanelLeft">Delivery fee<span className="orderPanelRight">Free</span></h5>
        <h4>Total (Incl. VAT)<span className="orderPanelRight">${totalPrice()}</span></h4>
        <button onClick={() => console.log('gone to checkout')}>Go to checkout</button>
      </div>


      <PopularItemsPanel className="popularPanel" items={itemList} handleChange={setItemList} />
    </main>
  );
}

function YourOrderPanel(props) {
  return (
  <>

  </>);
}

function OrderedItemList (props) {
  return (
  <>

  </>);
}

function OrderedItem(props) {
  const {id, name, price, quantity} = props.item;

  return (
  <>

  </>);
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
