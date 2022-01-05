# React Checkout Component

My very first project using React / HTML / CSS.

The UI according to one's idea from was created:
https://www.uidesigndaily.com/posts/sketch-checkout-components-card-payment-day-1293

![image](https://user-images.githubusercontent.com/33731734/136807863-8247f9c5-7215-4976-8074-ca46e2bfd4c0.png)

## Result

And the result is as follows:

![image](https://user-images.githubusercontent.com/33731734/136808043-4bc42d62-25c7-476d-956c-3d1a23837326.png)


## Components

In the project the component `react-horizontal-scrolling-menu` was reused

```
<ScrollMenu LeftArrow={TopArrow}
            RightArrow={BottomArrow}
            wrapperClassName="orderedItemWrapper"
            scrollContainerClassName="orderedItemContainer">
  { props.items.map((item) => (
    <OrderedItem key={item.id} 
                  itemId={item.id}
                  item={item}
                  removeItem={props.removeItem}
                  updateQuantity={props.updateQuantity} />
  ))}
</ScrollMenu>
```
