import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BottomArrow, TopArrow } from './MenuArrows';
import "./YourOrderPanel.css"

export function YourOrderPanel(props) {
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

      <OrderedItemList items={items} updateQuantity={props.onUpdateQuantity} removeItem={props.onRemoveItem}/>

      <h5>Subtotal<span>$ {sumPrice()}</span></h5>
      <h5>Delivery fee<span>{fee() === 0 ? 'Free' : '$ ' + fee()}</span></h5>
      <h4>Total (Incl. VAT)<span>$ {fee() + sumPrice()}</span></h4>
      <button className="button checkoutButton" onClick={() => console.log('gone to checkout')}>Go to checkout</button>
    </div>);
}

function OrderedItemList (props) {
  return (
    <div className="orderedItemList">
      <ScrollMenu LeftArrow={TopArrow}
                  RightArrow={BottomArrow}
                  wrapperClassName="orderedItemWrapper"
                  scrollContainerClassName="orderedItemContainer">
        { props.items.map((item) => (
          <OrderedItem key={item.id} 
                        itemId={item.id}
                        item={item}
                        removeItem={props.onRemoveItem}
                        updateQuantity={props.onUpdateQuantity} />
        ))}
      </ScrollMenu>
    </div>);
}

function OrderedItem(props) {
  const item = props.item;
  console.log(item);
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(JSON.stringify(props.item.id));
  console.log(visibility.visibleItemsWithoutSeparators);

  return <div className="orderedItem" style={{ opacity: visible ? "1" : "0.5"}}>
      <h4>{item.name}<button className="removeItemButton" onClick={() => props.onRemoveItem(item.id)}>x</button></h4>
      <p>${item.price * item.quantity}</p>
      <div className="quantityContainer">
        <button className="quantityButton" 
                onClick={() => props.onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}>-</button>
        <h3 className="quantity">{item.quantity}</h3>
        <button className="quantityButton" 
                onClick={() => props.onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
  </div>
}