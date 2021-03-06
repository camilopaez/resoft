-- MySQL Script generated by MySQL Workbench
-- mié 01 may 2019 19:45:50 -05
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS mydb ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS mydb DEFAULT CHARACTER SET utf8 ;
USE mydb ;

-- -----------------------------------------------------
-- Table mydb.Restaurante
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Restaurante (
  idRestaurante INT NOT NULL AUTO_INCREMENT,
  nombreRestaurante VARCHAR(45) NOT NULL,
  ubicacion VARCHAR(45) NOT NULL,
  nit VARCHAR(45) NOT NULL,
  numeroContacto VARCHAR(13) NOT NULL,
  correoContacto VARCHAR(45) NULL,
  cantidadMesas INT NOT NULL,
  regimen INT NOT NULL,
  PRIMARY KEY (idRestaurante))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Nomina
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Nomina (
  idNomina INT NOT NULL,
  arl INT NULL,
  eps INT NULL,
  pension INT NULL,
  parafiscal INT NULL,
  cesantia INT NULL,
  otrosGatos INT NULL,
  Restaurante_idRestaurante INT NOT NULL,
  PRIMARY KEY (idNomina),
  INDEX fk_Nomina_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  CONSTRAINT fk_Nomina_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Empleado
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Empleado (
  idEmpleado INT NOT NULL AUTO_INCREMENT,
  nombreEmpleado VARCHAR(45) NOT NULL,
  telEmpleados VARCHAR(45) NOT NULL,
  correoEmpleado VARCHAR(45) NULL,
  SalarioEmpleado INT UNSIGNED NOT NULL,
  Restaurante_idRestaurante INT NOT NULL,
  Nomina_idNomina INT NOT NULL,
  PRIMARY KEY (idEmpleado),
  INDEX fk_Empleado_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  INDEX fk_Empleado_Nomina1_idx (Nomina_idNomina ASC) ,
  CONSTRAINT fk_Empleado_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Empleado_Nomina1
    FOREIGN KEY (Nomina_idNomina)
    REFERENCES mydb.Nomina (idNomina)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.MedidasProducto
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.MedidasProducto (
  idMedidasProducto INT NOT NULL,
  MedidasProductocol VARCHAR(45) NOT NULL,
  PRIMARY KEY (idMedidasProducto))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Producto
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Producto (
  idProducto INT NOT NULL AUTO_INCREMENT,
  nombreProducto VARCHAR(45) NOT NULL,
  marcaProducto VARCHAR(45) NOT NULL,
  fechaVencimiento VARCHAR(45) NOT NULL,
  Costo INT NOT NULL,
  MedidasProducto_idMedidasProducto INT NOT NULL,
  MedidasProducto_idMedidasProducto1 INT NOT NULL,
  PRIMARY KEY (idProducto),
  INDEX fk_Producto_MedidasProducto1_idx (MedidasProducto_idMedidasProducto1 ASC) ,
  CONSTRAINT fk_Producto_MedidasProducto1
    FOREIGN KEY (MedidasProducto_idMedidasProducto1)
    REFERENCES mydb.MedidasProducto (idMedidasProducto)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Usuario (
  idUsuario INT NOT NULL,
  nombreUsuario VARCHAR(45) NOT NULL,
  telUsuario VARCHAR(45) NOT NULL,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  correoUsuario VARCHAR(45) NOT NULL,
  Restaurante_idRestaurante INT NOT NULL,
  PRIMARY KEY (idUsuario),
  INDEX fk_Usuario_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  CONSTRAINT fk_Usuario_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Platos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Platos (
  idPlatos INT NOT NULL,
  nombrePlato VARCHAR(45) NULL,
  PrecioPlato VARCHAR(45) NULL,
  Restaurante_idRestaurante INT NOT NULL,
  PRIMARY KEY (idPlatos),
  INDEX fk_Platos_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  CONSTRAINT fk_Platos_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Mesa
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Mesa (
  idMesa INT NOT NULL,
  capacidad INT NOT NULL,
  disponibilidad TINYINT NOT NULL,
  Restaurante_idRestaurante INT NOT NULL,
  PRIMARY KEY (idMesa),
  INDEX fk_Mesa_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  CONSTRAINT fk_Mesa_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Pedido
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Pedido (
  idPedido INT NOT NULL,
  horaFechaLlegada TIMESTAMP NOT NULL,
  costoPedido INT NOT NULL,
  Mesa_idMesa INT NOT NULL,
  Empleado_idEmpleado INT NOT NULL,
  estado VARCHAR(10) NOT NULL,
  horaFechaSalida DATE NOT NULL,
  propina VARCHAR(45) NOT NULL,
  Restaurante_idRestaurante INT NOT NULL,
  PRIMARY KEY (idPedido, Empleado_idEmpleado),
  INDEX fk_Pedido_Mesa1_idx (Mesa_idMesa ASC) ,
  INDEX fk_Pedido_Empleado1_idx (Empleado_idEmpleado ASC) ,
  INDEX fk_Pedido_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  CONSTRAINT fk_Pedido_Mesa1
    FOREIGN KEY (Mesa_idMesa)
    REFERENCES mydb.Mesa (idMesa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Pedido_Empleado1
    FOREIGN KEY (Empleado_idEmpleado)
    REFERENCES mydb.Empleado (idEmpleado)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Pedido_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Platos_has_Pedido
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Platos_has_Pedido (
  Platos_idPlatos INT NOT NULL,
  Pedido_idPedido INT NOT NULL,
  PRIMARY KEY (Platos_idPlatos, Pedido_idPedido),
  INDEX fk_Platos_has_Pedido_Pedido1_idx (Pedido_idPedido ASC) ,
  INDEX fk_Platos_has_Pedido_Platos1_idx (Platos_idPlatos ASC) ,
  CONSTRAINT fk_Platos_has_Pedido_Platos1
    FOREIGN KEY (Platos_idPlatos)
    REFERENCES mydb.Platos (idPlatos)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Platos_has_Pedido_Pedido1
    FOREIGN KEY (Pedido_idPedido)
    REFERENCES mydb.Pedido (idPedido)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Reserva
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Reserva (
  idReserva INT NOT NULL,
  nombreCliente VARCHAR(45) NOT NULL,
  telCliente VARCHAR(45) NOT NULL,
  correoCliente VARCHAR(45) NOT NULL,
  tipoCelebracion VARCHAR(45) NOT NULL,
  HoraFecha TIMESTAMP NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  paqueteElegido VARCHAR(45) NOT NULL,
  Mesa_idMesa INT NOT NULL,
  Restaurante_idRestaurante INT NOT NULL,
  PRIMARY KEY (idReserva),
  INDEX fk_Reserva_Mesa1_idx (Mesa_idMesa ASC) ,
  INDEX fk_Reserva_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  CONSTRAINT fk_Reserva_Mesa1
    FOREIGN KEY (Mesa_idMesa)
    REFERENCES mydb.Mesa (idMesa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Reserva_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Producto_has_Restaurante
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Producto_has_Restaurante (
  Producto_idProducto VARCHAR(45) NOT NULL,
  Producto_MedidasProducto_idMedidasProducto INT NOT NULL,
  Restaurante_idRestaurante INT NOT NULL,
  cantidad INT NULL,
  PRIMARY KEY (Producto_idProducto, Producto_MedidasProducto_idMedidasProducto, Restaurante_idRestaurante),
  INDEX fk_Producto_has_Restaurante_Restaurante1_idx (Restaurante_idRestaurante ASC) ,
  INDEX fk_Producto_has_Restaurante_Producto1_idx (Producto_idProducto ASC, Producto_MedidasProducto_idMedidasProducto ASC) ,
  CONSTRAINT fk_Producto_has_Restaurante_Producto1
    FOREIGN KEY (Producto_idProducto , Producto_MedidasProducto_idMedidasProducto)
    REFERENCES mydb.Producto (idProducto , MedidasProducto_idMedidasProducto)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Producto_has_Restaurante_Restaurante1
    FOREIGN KEY (Restaurante_idRestaurante)
    REFERENCES mydb.Restaurante (idRestaurante)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Platos_has_Producto
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Platos_has_Producto (
  Platos_idPlatos INT NOT NULL,
  Producto_idProducto INT NOT NULL,
  cantidad INT NOT NULL,
  PRIMARY KEY (Platos_idPlatos, Producto_idProducto),
  INDEX fk_Platos_has_Producto_Producto1_idx (Producto_idProducto ASC) ,
  INDEX fk_Platos_has_Producto_Platos1_idx (Platos_idPlatos ASC) ,
  CONSTRAINT fk_Platos_has_Producto_Platos1
    FOREIGN KEY (Platos_idPlatos)
    REFERENCES mydb.Platos (idPlatos)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Platos_has_Producto_Producto1
    FOREIGN KEY (Producto_idProducto)
    REFERENCES mydb.Producto (idProducto)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
