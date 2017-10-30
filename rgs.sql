/*
    setup the rgs database
*/

DROP DATABASE IF EXISTS rgs;
CREATE DATABASE rgs;

\c rgs;

CREATE TABLE authors (
    ID SERIAL PRIMARY KEY,
    name varchar(35),
    surname varchar(35)
);

CREATE TABLE books (
    ID SERIAL PRIMARY KEY,
    author_id int references authors(id),
    title varchar(255)
);

INSERT INTO authors (name, surname)
    VALUES('Michael', 'Crichton'), ('Jane', 'Austen');

INSERT INTO books(author_id, title)
    VALUES(1,'Jurassic Park'), (2,'Emma');
