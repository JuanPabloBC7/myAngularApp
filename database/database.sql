CREATE DATABASE mysqldb;

USE mysqldb;

CREATE TABLE artistas(
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(150),
  fechaDeNacimiento DATE,
  fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE canciones(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150),
  genero INT(11),
  artista INT(11)
);

CREATE TABLE generos_musicales(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  clasificacion VARCHAR(150)
);


DESCRIBE artista
DESCRIBE canciones
DESCRIBE generos_musicales
/**
 * user: root
 * password: root
 * port: 3306
 * x protocol port: 33060
*/
