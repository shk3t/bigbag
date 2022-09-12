import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logov2 from "../assets/logov2.png";
import { ABOUT_PATH, CALL_REQUEST, DELIVERY_PATH, MAIN_PATH } from "../consts";
import { setModalAction } from "../reducers/modalRequestReducer";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer>
      <div className="footer-logo">
        <Link to={MAIN_PATH}>
          <img className="img-logo" src={logov2} alt="ДебютBag" />
        </Link>
        <p>Промышленная полимерная упаковка</p>
        <p className="footer__legal-inf">
          Предложение товаров и услуг на сайте не является офертой.
        </p>
        <p className="footer__legal-inf">
          Icons created by
          <a href="https://www.flaticon.com/ru/"> Karacis, Talha Dogar</a>.
        </p>
        <p>&copy; 2020-2022</p>
      </div>
      <div className="footer-nav">
        <ul>
          <Link to={ABOUT_PATH}>О нас</Link>
          <li>Оплата</li>
          <Link to={DELIVERY_PATH}>Доставка</Link>
        </ul>
      </div>

      <div className="footer-call">
        <p>Нужна консультация? Оставьте свой номер, и мы c вами свяжемся</p>
        <button
          className="btn_submit"
          onClick={(isActive) =>
            dispatch(setModalAction(CALL_REQUEST, isActive))
          }
        >
          Оставить номер
        </button>
      </div>
      <div className="footer-contacts">
        <p>
          Москва (499) 490-78-12 <br />
          avega.si@mail.ru
        </p>
        <br />
        <p>
          <strong>г. Санкт-Петербург</strong>, ул. Минеральная, д. 31В, офис 20{" "}
        </p>
        <br />
        <p>
          г. <strong>Москва</strong>, м. Пражская, ул. Подольских Курсантов, д.
          3, стр. 7А, СК "Мобиус Логистика"
        </p>
      </div>
    </footer>
  );
}
