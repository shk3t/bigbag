import React from "react";
import Header from "../components/Header";
import Way from "../components/Way";
import Footer from "../components/Footer";

export default function DeliveryPage() {
  return (
    <div>
      <Way />
      <div className="about-delivery">
        <div className="about-us__text">
          <h2>Доставка</h2>
          Организуем доставку по <strong> Москве и Московской области </strong>
          удобной вам транспортной компанией. Стоимость доставки зависит от
          расстояния, а также веса и объёма груза. Мы подбираем самые выгодные
          тарифы для наших клиентов. Доставляем по{" "}
          <strong>России и странам CНГ!</strong> <br /> <br />
          Рассчитайте стоимость доставки по телефону{" "}
          <strong> (812) 679-05-55 </strong> или напишите нам на почту
          SALES.AVEGA@YANDEX.RU
        </div>
      </div>
      <Footer />
    </div>
  );
}
