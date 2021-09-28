function YourOrderPanel(props) {
  
    const totalPrice = () => {
      let sum = 0;
      props.items.map(i => {
        sum = sum + i.quantity * i.price;
      })
  
      return sum;
    }
  
    return (
      <>
        <h3>Your order ({props.items.length} items)</h3>
  
        <OrderedItemList className="orderedItemList" items={props.items} updateQuantity={props.updateQuantity}/>
  
        <h5 className="orderPanelLeft">Subtotal<span className="orderPanelRight">${totalPrice()}</span></h5>
        <h5 className="orderPanelLeft">Delivery fee<span className="orderPanelRight">Free</span></h5>
        <h4>Total (Incl. VAT)<span className="orderPanelRight">${totalPrice()}</span></h4>
        <button onClick={() => console.log('gone to checkout')}>Go to checkout</button>
      </>);
}

function OrderedItemList (props) {
    return (
        <>
          { props.items.map((item) => {
            return <div key={item.id} className="orderedItem">
                <h4>{item.name}</h4>
                <p>{item.price * item.quantity}</p>
                <button onClick={() => props.updateQuantity(item.id, item.quantity - 1)}>-</button>
                <h3>{item.quantity}</h3>
                <button onClick={() => props.updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          })}
        </>);
  }

export default YourOrderPanel;