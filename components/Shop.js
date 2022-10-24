import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import useFetch from "../hooks/useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();

  useEffect(() => {
    (async () => {
      try {
        await get("https://covid-shop-mcs.herokuapp.com/").then((data) =>
          setItems(data)
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, [get]);

  return (
    <div className="shop">
      {loader ? "Загружаем..." : ""}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
