import React from 'react'
import "./YourOrderPanel.css"

function YourOrderPanel(props) {
  const items = props.items;

    const totalPrice = () => {
      let sum = 0;
      items.forEach(i => {
        sum = sum + i.quantity * i.price;
      });
  
      return sum;
    }
  
    return (
      <div className="orderPanel" >
        <h3>Your order ({items.length} items)</h3>
  
        <OrderedItemList items={items} updateQuantity={props.updateQuantity}/>
  
        <h5 className="orderPanelLeft">Subtotal<span>${totalPrice()}</span></h5>
        <h5 className="orderPanelLeft">Delivery fee<span>Free</span></h5>
        <h4>Total (Incl. VAT)<span>${totalPrice()}</span></h4>
        <button className="button checkoutButton" onClick={() => console.log('gone to checkout')}>Go to checkout</button>
      </div>);
}

function OrderedItemList (props) {
    return (
        <ul className="orderedItemList">
          { props.items.map((item) => {
            return <li key={item.id} className="orderedItem">
                <h4>{item.name}<button className="removeItemButton">x</button></h4>
                <p>${item.price * item.quantity}</p>
                <div className="quantityContainer">
                  <button className="quantityButton" onClick={() => props.updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <h3 className="quantity">{item.quantity}</h3>
                  <button className="quantityButton" onClick={() => props.updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
            </li>
          })}
        </ul>);
  }

export default YourOrderPanel;