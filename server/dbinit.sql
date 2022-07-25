TRUNCATE TABLE base_category CASCADE;
TRUNCATE TABLE base_product CASCADE;

INSERT INTO base_category
VALUES
    ('meshki', 'Мешки'),
    ('perchatki', 'Перчатки');

INSERT INTO base_product
VALUES
    ('seryj-meshok', 'Серый мешок', 'Очень прочный мешок серого цвета', 30.50, 'example-bug.png', TRUE, 'meshki'),
    ('belyj-meshok', 'Белый мешок', 'Просто прочный мешок белого цвета', 15.00, 'example-bug2.png', TRUE, 'meshki'),
    ('chernye-perchatki', 'Черные перчатки', 'Балдежные черные тканевые перчатки, которые не страшно надеть на руку', 16.49, 'example-bug3.png', TRUE, 'perchatki'),
    ('bolshoi-belyj-meshok', 'Большой белый мешок', 'Как и просто белый мешок, только еще и большой', 150.00, 'example-bug3.png', TRUE, 'meshki');
