import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, selectCategory } from "./categorySlice";
import "./categories.scss";

export function Categories() {
  const categories = useSelector((state) => state.category.value);
  const loading = useSelector((state) => state.category.status === "loading");
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  function handleCategorySelect(category) {
    dispatch(selectCategory(category));
  }

  if (loading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      {categories?.map((category) => (
        <div key={category.id}>
          <p className='list' onClick={() => handleCategorySelect(category)}>{category.name}</p>
        </div>
      ))}
    </div>
  );
}
