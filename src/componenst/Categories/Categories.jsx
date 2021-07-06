import React, { memo } from "react";

const Categories = memo(({ items, onClickItem, category }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={category === null ? "active" : ""}
          onClick={() => onClickItem(null)}
        >
          Все
        </li>
        {items?.map((name, index) => (
          <li
            className={category === index ? "active" : ""}
            onClick={() => onClickItem(index)}
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
