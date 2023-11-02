-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-08-2018 a las 07:18:45
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.8

-- Base de datos: `tienda`
CREATE DATABASE IF NOT EXISTS tienda;
USE tienda; -- Selecciona la base de datos "tienda"

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

-- Estructura de la tabla `comprador`
CREATE TABLE IF NOT EXISTS `comprador` (
  `IDComprador` int(11) NOT NULL,
  `nombreComprador` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcado de datos para la tabla `comprador`
INSERT INTO `comprador` (`IDComprador`, `nombreComprador`) VALUES
(1, 'Emma Wilson'),
(2, 'Liam Clark'),
(3, 'Charlotte Turner'),
(4, 'Daniel Harris'),
(5, 'Isabella Jackson');

-- --------------------------------------------------------

-- Estructura de tabla `Producto`
CREATE TABLE IF NOT EXISTS `Producto` (
  `IDVendedor` int(11) NOT NULL,
  `IDComprador` int(11) NOT NULL,
  `IDTipoProducto` int(11) NOT NULL,
  `precioCompra` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcado de datos para la tabla `Producto`
INSERT INTO `Producto` (`IDVendedor`, `IDComprador`, `IDTipoProducto`, `precioCompra`) VALUES
(1, 1, 1, 1000),
(2, 2, 2, 2000);

-- --------------------------------------------------------

-- Estructura de tabla `TipoProducto`
CREATE TABLE IF NOT EXISTS `TipoProducto` (
  `IDTipoProducto` int(11) NOT NULL,
  `descripcionProducto` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcado de datos para la tabla `TipoProducto`
INSERT INTO `TipoProducto` (`IDTipoProducto`, `descripcionProducto`) VALUES
(1, 'Cinturón campeonato'),
(2, 'Silla plegable'),
(3, 'Bate de béisbol'),
(4, 'Cuerdas del ring'),
(5, 'Camiseta de luchador'),
(6, 'Máscara de lucha libre');

-- --------------------------------------------------------

-- Estructura de tabla `vendedor`

CREATE TABLE IF NOT EXISTS `vendedor` (
  `IDVendedor` int(11) NOT NULL,
  `nombreVendedor` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcado de datos para la tabla `vendedor`
INSERT INTO `vendedor` (`IDVendedor`, `nombreVendedor`) VALUES
(1, 'Emily Johnson'),
(2, 'Michael Smith'),
(3, 'Sophia Davis'),
(4, 'William Brown'),
(5, 'Olivia Miller');


-- Índices para tablas volcadas

--
-- Indices de la tabla `Comprador`
--
ALTER TABLE `comprador`
  ADD PRIMARY KEY (`IDComprador`);

--
-- Indices de la tabla `Producto`
--
ALTER TABLE `Producto`
  ADD KEY `fk_Comprador` (`IDComprador`),
  ADD KEY `fk_vendedor` (`IDVendedor`),
  ADD KEY `fk_tipoproducto` (`IDTipoProducto`);

--
-- Indices de la tabla `TipoProducto`
--
ALTER TABLE `TipoProducto`
  ADD PRIMARY KEY (`IDTipoProducto`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`IDVendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Comprador`
--
ALTER TABLE `comprador`
  MODIFY `IDComprador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `TipoProducto`
--
ALTER TABLE `TipoProducto`
  MODIFY `IDTipoProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `IDVendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Producto`
--
ALTER TABLE `Producto`
  ADD CONSTRAINT `fk_Comprador` FOREIGN KEY (`IDComprador`) REFERENCES `comprador` (`IDComprador`),
  ADD CONSTRAINT `fk_tipoproducto` FOREIGN KEY (`IDTipoProducto`) REFERENCES `TipoProducto` (`IDTipoProducto`),
  ADD CONSTRAINT `fk_vendedor` FOREIGN KEY (`IDVendedor`) REFERENCES `vendedor` (`IDVendedor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
