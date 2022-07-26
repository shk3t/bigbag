import React from "react"
import avgLogo from "../assets/avg_logo.png"

  export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={avgLogo} alt="АвегаBag" />
        <p>Промышленная полимерная упаковка</p>
        <p>&copy; 2020-2022</p>
      </div>
      <div className="footer-nav">
        <ul>
          <li>О компании</li>
          <li>Оплата</li>
          <li>Доставка</li>
        </ul>
      </div>

      <div className="footer-call">
        <p>Нужна консультация? Оставьте свой номер, и мы c вами свяжемся:</p>
        <form action="#" method="post" className="phone_form">
          <div className="user_phone">
            <input type="text" placeholder="+7xxx-xxx-xx-xx" id="user_phone" className="rfield" />
          </div>

          <input type="submit" className="btn_submit" />
        </form>
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
          г. <strong>Москва</strong>, м. Пражская, ул. Подольских Курсантов, д. 3, стр. 7А, СК
          "Мобиус Логистика"
        </p>
      </div>
    </footer>
  )
}
