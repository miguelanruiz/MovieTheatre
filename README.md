# MovieTheatre
## _Ejercicio de implementación sobre TypeScript_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

z ![](RackMultipart20230523-1-c9lx73_html_aee28f194663e231.png)

**Contexto**

Se requiere desarrollar una aplicación que permita consultar información sobre series de televisión.

El elemento principal de la aplicación es una serie de la cual se requiere una imagen representativa, el nombre y un conjunto de categorías a la que pertenece (acción, drama, romance).

Una serie tiene una lista con los nombres de los directores y de los actores. Tanto de los actores como de los directores se requiere conocer su nombre, fotografía, descripción y el listado de series que ha dirigido o en las que ha actuado.

Cada serie tiene un conjunto de episodios. De cada episodio se requiere su nombre, un resumen y su duración.

Las series son emitidas en diferentes plataformas. De la plataforma se requiere el nombre, el sitio web y el listado de planes y precios que ofrece.

<p align="center">
  <img src="https://raw.githubusercontent.com/miguelanruiz/MovieTheatre/master/UML.png" alt="Diagrama construido"/>
</p>

**Entregables**

Habrá tres entregas del proyecto así:

**Entrega 1 (primera sesión sincrónica de la semana 10)**

- Crear repositorio para el proyecto
- En la wiki del repositorio incluir un enlace al modelo conceptual que contiene clases, atributos, asociaciones y glosario de términos
- Subir a la actividad de Bloque Neón la dirección del repositorio

**Entrega 2 (segunda sesión sincrónica de la semana 10)**

- Clases en TypeScript con sus atributos y método constructor. Cada clase debe ir en un archivo individual
- Subir los cambios al repositorio

**Entrega 3 (tercera sesión sincrónica de la semana 10)**

- Implementar los siguientes métodos

1. Mostrar el listado de todas las series
2. Mostrar el detalle de una serie en particular
3. Mostrar el listado de categorías
4. Mostrar el listado de directores y actores de una serie
5. Mostrar el detalle de un director y de un actor
6. Mostrar el listado de las plataformas
7. Mostrar detalle de una plataforma
8. Crear una nueva serie
9. Crear una nueva categoría
10. Crear un nuevo actor
11. Crear un nuevo director
12. Agregar una categoría a una serie
13. Agregar un actor a una serie
14. Agregar un director a una serie

- Subir los cambios al repositorio

**Rúbrica Entrega 1**

| **Diagrama de clases** | El diagrama de clases tiene todas las clases del enunciado y sus atributos.
Existen asociaciones entre las clases. | El diagrama de clases tiene todas las clases del enunciado y sus atributos.
No existen asociaciones entre las clases. | El diagrama de clases tiene todas las clases del enunciado.
No tienen atributos ni asociaciones en las clases. | El diagrama de clases no tiene todas las clases. | No se desarrolló el diagrama de clases. |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 3.5 | 2.5 | 1.5 | 0 |

| **Glosario de términos** | El glosario de términos tiene todas las entidades y relaciones del diagrama de clases. | El glosario de términos tiene todas las entidades del diagrama de clases, pero no las relaciones. | El glosario de términos tiene más de la mitad de las entidades del diagrama de clases. | El glosario de términos tiene menos de la mitad de las entidades del diagrama de clases. | No se desarrolló el glosario de términos. |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 0.6 | 0.4 | 0.2 | 0 |

| **TOTAL** | **5.0** | **4.0** | **3.0** | **1.5** | **0** |
| --- | --- | --- | --- | --- | --- |

**Rúbrica Entrega 2**

**Por cada clase:**

| **Implement-ación de la clase** | La clase está creada y tiene los atributos y asociaciones correctas. | La clase está creada y tiene los atributos, pero no las asociaciones correctas. | La clase está creada pero no tiene los atributos ni asociaciones correctas. | La clase no está creada. |
| --- | --- | --- | --- | --- |
| 3.5 | 2.5 | 1.5 | 0 |

| **Constructor** | La clase tiene el constructor y recibe los atributos necesarios. | La clase no tiene constructor, o está incompleto. |
| --- | --- | --- |
| 0.5 | 0 |

| **Módulo** | La clase se encuentra modularizada. | La clase no se encuentra modularizada. |
| --- | --- | --- |
| 0.5 | 0 |

| **Ejecución / Compilación** | El código de la clase se ejecuta correctamente sin errores. | El código de la clase tiene errores de ejecución o compilación. |
| --- | --- | --- |
| 0.5 | 0 |

| **TOTAL** | **5.0 / N\*** | **4.0 / N\*** | **2.0 / N\*** | **0.0 / N\*** |
| --- | --- | --- | --- | --- |

**\*N** corresponde al número de clases del diagrama de clases del proyecto.

**Rúbrica Entrega 3**

Para cada método se realizan pruebas para comprobar que está funcionando.

| **Descripción** | El método está implementado y funciona correctamente. | El método está implementado, pero tiene errores leves. | El método está implementado, pero tiene errores graves. | El método no está implementado. |
| --- | --- | --- | --- | --- |
| **Método 1.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 2.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 3.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 4.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 5.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 6.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 7.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 8.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 9.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 10.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 11.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 12.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 13.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 14.** | 0.359 | 0.25 | 0.141 | 0 |

| **TOTAL** | **5.0** | **4.0** | **2.0** | **0.0** |
| --- | --- | --- | --- | --- |