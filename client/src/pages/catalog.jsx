import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Way from "../components/Way";
import "../styles/main.css";
import ProductItem from "../components/ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemsService from "../API/ItemsService";
import ImgService from "../API/ImgService";

const Catalog = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  async function fetchItems() {
    const items = await ItemsService.getAll();
    setItems(items);
  }

  /*
  const [imgs, setImgs] = useState([]);

  async function fetchImgs() {
    const imgs = await ImgService.getAll();
    setImgs(imgs);
    // imgs.map((img) => (img = img.url));
    // console.log(imgs);
  }
  */

  return (
    <div className="root-div">
      <Header />
      <Way />
      <div className="find-string">Это строка поиска, будет компонентом</div>
      <div className="catalog">
        <div className="catalog-item__wrap">
          {items.map((item) => (
            <ProductItem
              item={item}
              //key ниже должен быть уникальным, чтобы react не ругался
              key={item.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
