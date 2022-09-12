# Задачки

## Админка

- [ ] таблицы
    - [ ] подкатегорий
- [ ] формы
    - [ ] подкатегорий

## Каталог

- [ ] Меню фильтрации
    - [X] По группам
    - [ ] По подгруппам
- [ ] Пагинация

### Задачки Кати
- [ ] Переделать Каталог на главной странице

<br />

### Чтобы не забыть

- [ ] индикатор загрузки страниц
- [ ] отключить devtools при загрузке в интернеты

<br />

# Как пересобирать базу данных:

1. запустить `bigbug/server/bin/resetdb.sql` в слоне
2. удалить папку `bigbug/server/base/migrations`
3. `python manage.py makemigrations base` [^cmd]
4. `python manage.py migrate` [^cmd]
5. `python manage.py loaddata products` [^cmd]

<br />

[^cmd]: запускать в терминале/**cmd** из `bigbug/server`
