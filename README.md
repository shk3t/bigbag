# Задачки

## Страница каталога

- [x] макет с микро-карточкой единственного товара
- [x] стили
- [x] разожение на реакт компоненты
- [x] замена `<a>` на `<Link>`
- [x] разворот этого списка через `products.map()`
- [x] использование хука `useState()` для этой задачи
- [x] подгрузка данных с сервера через `axios.get()` и `useEffect()`
  - [x] картинки передаем через `<img src={product.image} />` (статики бекенда уже настроены)

## Страница авторизации

- [x] макет формы для логининга
- [x] макет формы для регистрации
- [x] стили
- [x] все в реакт
- [ ] подключить эндпоинты сервера
  - [ ] реализовать `AuthService`
    - [ ] `register`
    - [ ] `login`
    - [ ] `logout`
    - [ ] **JWT** сохранять в `localStorage`
    - [ ] создать проверку на валидность **access token** и рефрешить по необходимости
- [ ] добавить кнопку **logout** в **Footer**
- [x] объединить **login** и **register** в одну страницу через `isAuth ? ... : ...`
- [ ] реализовать как всплывающее окно

### Чтобы не забыть

- [ ] синхронизировать название страницы с названием вкладки в браузере

<br />

# Как пересобирать базу данных:

## "Легкий" способ:

### Подготовка: [^admin]

- как-то установить `psql` (может быть уже установлен)
- как-то установить `bash`

### Потом:

- просто запускать `bash dbreset.sh` [^cmd]

## Тяжелый способ:

1. запустить `sql/reset.sql` в слоне
2. удалить все из `avegabug/server/base/migrations`
3. `python manage.py makemigrations base` [^cmd]
4. `python manage.py makemigrations base` [^cmd]
5. запустить `sql/init.sql` в слоне

<br />

[^admin]: понадобятся права администратора
[^cmd]: запускать в терминале/**cmd** из `avegabug/server`
