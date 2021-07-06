import React, { useCallback, useEffect } from "react";
import Categories from "../componenst/Categories/Categories";
import SortPopup from "../componenst/Popup/SortPopup";
import PizzaBlock from "../componenst/PizzaBlock/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filter";
import { fetchPizzas } from "../redux/actions/pizzas";
import PizzaHolderBlock from "../componenst/PizzaBlock/PizzaHolderBlock";

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.items);
  const isLoad = useSelector((state) => state.pizza.isLoaded);
  const basketItems = useSelector((state) => state.basket.items);

  const { category, sortBy } = useSelector(({ filter }) => filter);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortItems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавит", type: "name", order: "asc" },
  ];

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortBy = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
          category={category}
        />
        <SortPopup items={sortItems} onSelectSortBy={onSelectSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoad
          ? pizzas.map((obj) => (
              <PizzaBlock pizzas={obj} key={obj.id} basketItems={basketItems} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaHolderBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
