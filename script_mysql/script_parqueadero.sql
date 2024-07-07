use parqueadero;

create table marcas
(
	id int unsigned not null auto_increment primary key,
	tipo_vehiculo enum("carro", "moto") not null,
    nombre varchar(255) not null
);

insert into marcas (tipo_vehiculo, nombre) values
("carro", "renault"),
("carro", "toyota"),
("carro", "chevrolet"),
("carro", "mazda"),
("carro", "kia"),
("carro", "suzuki"),
("carro", "nissan"),
("carro", "volkswagen"),
("carro", "ford"),
("carro", "hyundai"),
("carro", "otra"),
("moto", "bajaj"),
("moto", "yamaha"),
("moto", "akt"),
("moto", " victory"),
("moto", "honda"),
("moto", "suzuki"),
("moto", "tvs"),
("moto", "hero"),
("moto", "kynco"),
("moto", "benelli"),
("moto", "otra");

create table colores
(
	id int unsigned not null auto_increment primary key,
    nombre varchar(255) not null
);

insert into colores (nombre) values
("blanco"),
("gris"),
("negro"),
("azul"),
("rojo"),
("plata"),
("verde"),
("marron"),
("amarillo"),
("rosado"),
("otro");

create table usuarios
(
	id int unsigned not null auto_increment primary key,
    nombre varchar(255) not null,
    identificacion varchar(255) not null,
    celular varchar(255) not null,
    email varchar(255) not null
);

create table vehiculos
(
	id int unsigned not null auto_increment primary key,
    placa varchar(6) not null,
    tipo_vehiculo enum("carro", "moto") not null,
    marca_id int unsigned not null,
    color_id int unsigned not null,
    modelo int not null,
	tipo_servicio enum("hora", "dia", "mes") not null,
    hora_entrada datetime not null,
    hora_salida datetime,
    usuario_id int unsigned,
    foreign key (color_id) references colores(id),
    foreign key (marca_id) references marcas(id),
	foreign key (usuario_id) references usuarios(id)
);


