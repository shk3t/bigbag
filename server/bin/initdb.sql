TRUNCATE TABLE base_user CASCADE;
TRUNCATE TABLE base_product CASCADE;
TRUNCATE TABLE base_polybagtype CASCADE;
TRUNCATE TABLE base_bigbagtype CASCADE;
TRUNCATE TABLE base_polybag CASCADE;
TRUNCATE TABLE base_bigbag CASCADE;

INSERT INTO base_product(id, type, image, price, price_on_request, in_stock, new, sale)
VALUES
    (5, 'Мешки полипропиленовые', 'ex.webp', 9.00, FALSE, TRUE, FALSE, FALSE),
    (8, 'Мешки полипропиленовые', 'example-bug.png', 13.50, FALSE, TRUE, FALSE, FALSE),
    (20, 'МКР (биг-бэг)', 'example-bug2.png', 525, FALSE, TRUE, FALSE, FALSE),
    (24, 'МКР (биг-бэг)', 'example-bug3.png', 535, FALSE, TRUE, TRUE, FALSE);

INSERT INTO base_polybagtype(name)
VALUES
    ('Строительные'),
    ('Пищевые'),
    ('Бытовые'),
    ('Ламинированные коробчатого типа'),
    ('Пищевые с П/Э вкладышем');

INSERT INTO base_bigbagtype(name)
VALUES
    ('МКР 2 стропы'),
    ('МКР 4 лямки'),
    ('МКР 4 стропы'),
    ('Вкладыши Новые МКР для МКР');

INSERT INTO base_polybag(id, subtype, size, color, poly_grade, bag_weight, weight_error, items_per_pack)
VALUES
    (5, 'Строительные', '55*105', 'Зеленый', '2', 50, 3, 1000),
    (8, 'Пищевые', '45*75', 'Белый', 'ВС', 45, 3, 1000);

INSERT INTO base_bigbag(id, subtype, size, top_modification, bottom_modification, bag_weight, items_per_pack, pack_size, pack_volume)
VALUES
    (20, 'МКР 2 стропы', '75*75*125', 'Открытый', 'Глухой', 0.98, 200, '120*70*70', 0.6),
    (24, 'МКР 4 лямки', '90*90*130', 'Открытый', 'Глухой', 1.1, 200, '120*70*70', 0.8);
