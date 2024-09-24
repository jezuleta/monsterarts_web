-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-08-2024 a las 23:37:00
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `monster_arts`
--

-- --------------------------------------------------------

-- Crear la base de datos

CREATE database if not exists monster_arts;
use monster_arts;
--
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_carrito`
--

CREATE TABLE `detalle_carrito` (
  `id_detalle_carrito` int(11) NOT NULL,
  `id_carrito` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id_detalle` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envio`
--

CREATE TABLE `envio` (
  `id_envio` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `direccion_envio` varchar(200) NOT NULL,
  `fecha_envio` date NOT NULL,
  `estado_envio` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `id_pago` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `fecha_pago` date NOT NULL,
  `monto` float NOT NULL,
  `metodo_pago` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `estado` varchar(30) NOT NULL,
  `total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio` float NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `id_artistas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `descripcion`, `precio`, `categoria`, `stock`, `imagen`, `id_artistas`) VALUES
(1, 'pintura de virgen', 'pintura al oleo ', 50000, 'pinturas', 1, 'https://i.pinimg.com/236x/7b/de/9d/7bde9df0efeeee7beb77c59c48bc6e32.jpg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `identificacion` varchar(20) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `rol` varchar(25) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `fecha_creacion` date NOT NULL DEFAULT current_timestamp(),
  `ultima_sesion` date NOT NULL DEFAULT current_timestamp(),
  `contrasena` varchar(50) NOT NULL,
  `forzar_cambio_contrasena` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `identificacion`, `nombres`, `apellidos`, `email`, `direccion`, `telefono`, `rol`, `estado`, `fecha_creacion`, `ultima_sesion`, `contrasena`, `forzar_cambio_contrasena`) VALUES
(1, '1087807', 'Juan Esteban ', 'Zuleta Vargas', 'jezuleta1987@gmail.com', 'tranv 7 n 5-27', '3176705278', 'admin', '', '2024-08-04', '2024-08-04', 'Contraseña', b'0'),
(2, '1089632', 'Miguel Angel ', 'Zuleta', 'miguel.zuleta@mail.com', 'carrera 64 n 43-29', '3113727654', 'artista', '', '2024-08-04', '2024-08-04', 'Contraseña', b'0'),
(3, '1087796', 'Liliana Maria', 'Velasquez', 'liliana.velasquez@mail.com', 'calle 15 n 27-17', '3113127654', 'cliente', '', '2024-08-04', '2024-08-04', 'Contraseña', b'0');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`,`id_cliente`),
  ADD KEY `cliente_carrito` (`id_cliente`);

--
-- Indices de la tabla `detalle_carrito`
--
ALTER TABLE `detalle_carrito`
  ADD PRIMARY KEY (`id_detalle_carrito`,`id_carrito`,`id_producto`),
  ADD KEY `carrito_detalle_carrito` (`id_carrito`),
  ADD KEY `producto_detalle_carrito` (`id_producto`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id_detalle`,`id_pedido`,`id_producto`),
  ADD KEY `pedido_detalle_pedido` (`id_pedido`),
  ADD KEY `producto_detalle_pedido` (`id_producto`);

--
-- Indices de la tabla `envio`
--
ALTER TABLE `envio`
  ADD PRIMARY KEY (`id_envio`,`id_pedido`),
  ADD KEY `pedido_envio` (`id_pedido`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`id_pago`,`id_pedido`),
  ADD KEY `pedido_pago` (`id_pedido`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id_pedido`,`id_cliente`),
  ADD KEY `cliente_pedido` (`id_cliente`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`,`id_artistas`),
  ADD KEY `artista_producto` (`id_artistas`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `identificacion` (`identificacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_carrito`
--
ALTER TABLE `detalle_carrito`
  MODIFY `id_detalle_carrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `envio`
--
ALTER TABLE `envio`
  MODIFY `id_envio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
  MODIFY `id_pago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `cliente_carrito` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `detalle_carrito`
--
ALTER TABLE `detalle_carrito`
  ADD CONSTRAINT `carrito_detalle_carrito` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `producto_detalle_carrito` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `pedido_detalle_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `producto_detalle_pedido` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `envio`
--
ALTER TABLE `envio`
  ADD CONSTRAINT `pedido_envio` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pago`
--
ALTER TABLE `pago`
  ADD CONSTRAINT `pedido_pago` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `cliente_pedido` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `artista_producto` FOREIGN KEY (`id_artistas`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
