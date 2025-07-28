import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [displayedItems, setDisplayedItems] = useState(items)

  function filterItems(cat, items){
    setDisplayedItems(items.filter((item) => {
      if(cat === "All"){
        return true;
      }else{
        return item.category === cat;
      }
    }
    ));
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=> filterItems(e.target.value, items)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
