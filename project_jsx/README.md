-- Подключитесь к базе данных world (которая находится на удаленном сервере).

2 Выведите список стран с языками, на которых в них говорят.

SELECT

    t1.name AS country, t2.language

FROM

    country AS t1

        LEFT JOIN

    countrylanguage AS t2 ON t1.code = t2.countrycode;

3 Выведите список городов с их населением и названием стран

SELECT

    t1.name AS city, t1.Population, t2.Name AS country

FROM

    city AS t1

        LEFT JOIN

    country AS t2 ON t1.countrycode = t2.Code;

4 Выведите список городов в South Africa

SELECT

    t1.name AS city

FROM

    city AS t1

        RIGHT JOIN

    country AS t2 ON t1.countrycode = t2.Code

WHERE

    t2.name = 'South Africa';

5. Выведите список стран с названиями столиц. Подсказка: в таблице country есть поле Capital, которое содержит номер города из таблицы City.

SELECT

    t1.name AS country, t2.name AS capital

FROM

    country AS t1

        LEFT JOIN


    city AS t2 ON t1.capital = t2.id;

6. Измените запрос 4 таким образом, чтобы выводилось население в столице.

SELECT

    t1.name AS capital_city, t1.population

FROM

    city AS t1

        JOIN

    country AS t2 ON t1.ID = t2.Capital

WHERE

    t2.name = 'South Africa';

7. Напишите запрос, который возвращает название столицы United States

SELECT

    t1.name AS capital_city, t2.name as country

FROM

    city AS t1

        JOIN

    country AS t2

    ON t1.ID = t2.Capital

WHERE

    t2.name = 'United States';

8.Используя базу hr_data.sql, вывести имя, фамилию и город сотрудника.

SELECT t1.first_name, t1.last_name, t3.city

From employees AS t1

        JOIN

    departments AS t2

    ON t1.department_id = t2.department_id

JOIN

    locations AS t3


    ON t2.location_id = t3.location_id;

9.Используя базу hr_data.sql, вывести города и соответствующие городам страны.

SELECT DISTINCT

    t1.city, t2.country_name AS country

FROM

    locations AS t1

        LEFT JOIN

    countries AS t2 ON t1.country_id = t2.country_id;
