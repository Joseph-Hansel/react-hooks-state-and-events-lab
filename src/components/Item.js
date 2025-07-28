import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  let cn = inCart ? "in-cart" : ""

  return (
    <li className={cn}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={inCart ? "remove" : "add"} 
        onClick={()=> {
          setInCart(!inCart)
        }
          // setInCart(!inCart)
        }
      >{inCart ? "Remove from Cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
