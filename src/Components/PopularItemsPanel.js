import "./PopularItemsPanel.css"

function PopularItemsPanel(props) {
    return (
      <div className="popularPanel" >
        <h4>Popular with your order ({props.items.length} items)</h4>
        <PopularItemList itemList={props.items} handleChange={props.handleChange} />
      </div>
    )
}
  
function PopularItemList(props) {
    return (
        <ul className="popularItemList" >
        { props.itemList.map((item) => {
            return <li key={item.id} className="popularItem">
                <h5 className="itemName">{item.name}</h5>
                <h5 className="itemPrice">${item.price}</h5>
                <button className="button addButton" onClick={() => props.handleChange(item.id)}>+ Add to order</button>
            </li>
        })} 
        </ul>
    )
}

export default PopularItemsPanel