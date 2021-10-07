import React from 'react'
import "./YourOrderPanel.css"

function YourOrderPanel(props) {
  const items = props.items;

  const sumPrice = () => {
    let sum = 0;
    items.forEach(i => {
      sum = sum + i.quantity * i.price;
    });

    return sum;
  }

  const fee = () => { return sumPrice() >= 20 ? 0 : 4.99; }

  return (
    <div className="orderPanel" >
      <h3>Your order ({items.length} items)</h3>

      <OrderedItemList items={items} updateQuantity={props.updateQuantity} removeItem={props.removeItem}/>

      <h5 className="orderPanelLeft">Subtotal<span>$ {sumPrice()}</span></h5>
      <h5 className="orderPanelLeft">Delivery fee<span>{fee() === 0 ? 'Free' : '$ ' + fee()}</span></h5>
      <h4>Total (Incl. VAT)<span>$ {fee() + sumPrice()}</span></h4>
      <button className="button checkoutButton" onClick={() => console.log('gone to checkout')}>Go to checkout</button>
    </div>);
}

function OrderedItemList (props) {
  return (
    <ul className="orderedItemList">
      { props.items.map((item) => {
        return <li key={item.id} className="orderedItem">
            <h4>{item.name}<button className="removeItemButton" onClick={() => props.removeItem(item.id)}>x</button></h4>
            <p>${item.price * item.quantity}</p>
            <div className="quantityContainer">
              <button className="quantityButton" 
                      onClick={() => props.updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}>-</button>
              <h3 className="quantity">{item.quantity}</h3>
              <button className="quantityButton" 
                      onClick={() => props.updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
        </li>
      })}
    </ul>);
}

export default YourOrderPanel;