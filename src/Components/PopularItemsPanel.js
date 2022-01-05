import React, { useState } from 'react';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./MenuArrows";

import "./PopularItemsPanel.css"

function PopularItemsPanel(props) {
    return (
      <div className="popularPanel" >
        <h4>Popular with your order ({props.items.length} items)</h4>
        <PopularItemList itemList={props.items} onAddToBasket={props.onAddToBasket} />
      </div>
    )
}
  
function PopularItemList(props) {

    return ( 
        <div className="popularItemListWrapper">
            <ScrollMenu LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        scrollContainerClassName="popularItemListContainer"> 
                { props.itemList.map((item) => (
                    <PopularItemCard
                        item={item}
                        itemId={item.id} // NOTE: itemId is required for track items
                        key={item.id}
                        onAddToBasket={props.onAddToBasket}
                    />
                ))} 
            </ScrollMenu>
        </div>
    )
}

function PopularItemCard(props) {
    const visibility = React.useContext(VisibilityContext);
    const visible = visibility.isItemVisible(JSON.stringify(props.item.id));

    return (<div className="popularItem" style={{ opacity: visible ? "1" : "0.5" }}>
        <h5 className="itemName">{props.item.name}</h5>
        <h5 className="itemPrice">${props.item.price}</h5>
        <button className="button addButton" 
                onClick={() => props.onAddToBasket(props.item.id)}
                disabled={!visible}>+ Add to order</button>
    </div>);
}

export default PopularItemsPanel