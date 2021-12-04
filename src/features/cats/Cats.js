import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catSlice";
import "./cats.scss";

export function Cats() {
  const [limit, setLimit] = useState(10);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const cats = useSelector((state) => state.cats.value);
  const loading = useSelector((state) => state.cats.loading === "loading");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory)
      dispatch(fetchCats({ id: selectedCategory.id, limit }));
  }, [selectedCategory, limit]);

  if (loading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <div className="catdiv">
        <div className="cats">
          {cats?.map((cat) => (
            <div key={cat.id}>
              <img className="catsImage" src={cat.url} alt={cat.id} />
            </div>
          ))}
        </div>
      </div>
      {!!cats && (
        <button className="btn" onClick={() => setLimit(limit + 10)}>
          Load more
        </button>
      )}
    </div>
  );
}
