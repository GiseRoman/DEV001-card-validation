# Tarjeta de crédito válida

## Índice

* [1. Información general](#1-Información general)
* [2. Temática](#2-Temática)
* [3. Prototipo de baja fidelidad](#3-Prototipo de baja fidelidad)
* [4. Prototipo de alta fidelidad](#4-Prototipo de alta fidelidad)
* [5. Para considerar Project Feedback](#5-para-considerar-project-feedback)

***

## 1. Información general
Como continuación del proyecto de preadmisión, volverás a trabajar sobre fundamentos de JavaScript, incluyendo conceptos como variables, condicionales, y funciones, así como eventos y manipulación básica del DOM, fundamentos de HTML y CSS.

Mientras desarrollas este proyecto, te familiarizarás con estos nuevos conceptos:

* Un _boilerplate_, la estructura básica de un proyecto en distintas carpetas (a través `modulos` en JS).
* Las herramientas de mantenimiento y mejora del código (linters y pruebas unitarias).
* Objetos en JavaScript, su estructura y métodos.
* Iteración (bucles) en JavaScript.
* Control de versiones con git (y la plataforma github)

## 2. Temática

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos el reverso del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 3.Prototipo de baja fidelidad

En este proyecto tendrás que construir una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Además, tendrás que
implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría validar una tarjeta de crédito y pensar en cómo debe ser esa
experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?)
etc.

Trabajando en parejas aprenderán a construir una aplicación web que interactuará
con la usuaria final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.

## 4.Prototipo de alta fidelidad

* Este proyecto lo resolvemos de manera individual. Te recomendamos una duracion de 1-3 sprints.
* Enfócate en aprender y no solamente en "completar" el proyecto. Te va a costar.
* Te sugerimos que no intentes saberlo todo antes de empezar a codear.  
No te preocupes demasiado ahora por lo que _todavía_ no entiendas. Irás aprendiendo.

***

## 5.Para considerar Project Feedback

En resumen, los criterios de aceptación mínimos del proyecto para considerar Project Feedback:

* [ ] Tiene una interfaz que permite a la usuaria saber si la tarjeta es valido y ocultar el numero hasta las 4 ultimos digitos
* [ ] El proyecto será entregado incluyendo pruebas unitarios de los métodos de `validator` (`isValid` y `maskify`) 
* [ ] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok)
* [ ] El proyecto será entregado subiendo tu código a GitHub.
* [ ] La interfaz será "desplegada" usando GitHub Pages. 
* [ ] El README contiene una definición del producto
