import React from "react";
import "./MenuArrows.css"

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({
  children,
  disabled,
  onClick,
  className
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"arrow " + className}
      style={{
        opacity: disabled ? "0" : "1"
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  return (
    <PrevArrow className="left">
      <i className="fas fa-arrow-circle-left"></i>
    </PrevArrow>
  )
}

export function TopArrow() {
  return (
    <PrevArrow className="top">
      <i className="fas fa-arrow-circle-up"></i>
    </PrevArrow>
  )
}

function PrevArrow({children, className}) {
  const {
    // getItemById,
    getPrevItem,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isFirstItemVisible
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    const prevItem = getPrevItem();
    scrollToItem(prevItem?.entry?.target, "smooth", "start");
    // OR
    // scrollToItem(
    //   getItemById(visibleItemsWithoutSeparators.slice(-2)[0]),
    //   "smooth",
    //   "end"
    // );
  };

  return (
    <Arrow disabled={disabled} onClick={clickHandler} className={className}>
      {children}
    </Arrow>
  );
}

export function RightArrow() {
  return (<NextArrow className="right">
    <i className="fas fa-arrow-circle-right"></i>
  </NextArrow>)
}

export function BottomArrow() {
  return (<NextArrow className="bottom">
    <i className="fas fa-arrow-circle-down"></i>
  </NextArrow>)
}

function NextArrow({children, className}) {
  const {
    // getItemById,
    getNextItem,
    isLastItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    const nextItem = getNextItem();
    scrollToItem(nextItem?.entry?.target, "smooth", "end");
    // OR
    // scrollToItem(
    //   getItemById(visibleItemsWithoutSeparators[1]),
    //   "smooth",
    //   "start"
    // );
  };

  return (
    <Arrow disabled={disabled} onClick={clickHandler} className={className}>
      {children}
    </Arrow>
  );
}