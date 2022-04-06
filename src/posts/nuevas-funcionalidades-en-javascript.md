---
title: "JavaScript: Nuevas Funcionalidades "
date: 2022-04-06T15:31:42.755Z
image: /assets/es_portrait.svg
---
Todos los años tenemos nuevas actualizaciones en JavaScript que permiten hacer nuestra lógica de manera más legible y si se puede con menos lineas de código.

En este pequeño escrito voy a mencionar algunas de estas por las cuales estoy emocionado (Algunas de estas estan todavia en etapa experimental).

## Array

### Array.prototype.at

Esta funcionalidad es una de las que pienso “Porque mierda no la metieron desde mucho antes”. Como todos saben, para acceder a un elemento que se encuentra en un listado a travez del índice se debe pasar este último dentro de llaves cuadradas, i.e.

```
const list = ['banana', 'coconut', 'pineapple']

const lastElement = list[2] // pineapple
```

Lo que se ve arriba esta bastante bien PERO hay detalles cuando quieres acceder a los últimos elementos de la lista. Tu supondrías que puedes acceder al último elemento de la lista de la misma manera que lo haces para el primero pero no, no podrías estar más equivocado, y es aquí donde no entiendes las decisiones que toma el cómite del EcmaScript

```
const list = ['banana', 'coconut', 'pineapple']

const lastElement = list[-1] // undefined

// The correct way to iterate thru the list in reverse order
// is practically doing an operation. The length of the list - the element

const lastElement = list[list.length - 1] // pineapple
```

Si, es aquí cuando te preguntas porque hacen eso y solo queda aceptar la realidad.

Pero afortunadamente hay que gente cuerda y entiende que debe haber maneras más sencillas de hacer esto, y es aquí donde viene *.at*

```
const list = ['banana', 'coconut', 'pineapple']

const firstElement = list.at(0) // banana
const lastElement = list.at(-1) // pineapple
```

A que es bello. Gracias a esas personas que pensaron en esto y lo hicieron posible.

### Array.prototype.groupBy y Array .prototype.groupByToMap

No te ha pasado que tienes un listado de elementos y necesitas agruparlos por un tipo en dato en específico, si no te ha tocado ¿qué rayos es lo que haces?. Para lograr hacer este tipo de agrupamiento hay varias formas de hacerlo pero generalmente tocaba iterar por cada uno de los elemento, inicializar una colección vacía y agregar los elementos en el formato que se quería.

Ahora con la incorporación de estos métodos no podría ser más sencillo.

 

```
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas',  type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];

const group = inventory.groupBy(({ type }) => type)

/* group is:
{ 
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 }, 
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ], 
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ] 
}
*/
```

¿Sencillo verdad?. Estos métodos va ayudar a muchos desarrolladores a reducir tiempo en sus trabajos y reducir la cantidad de lineas de código.

Por cierto, esta no es la única manera de hacerlo, como tal, el método recibe o espera una función que recibe como parametro el elemento, lo que permite que jueges en como quieres hacer las agrupaciones o la lógica para estas.

 

```
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas',  type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];

function myCallback( { quantity } ) {
  return quantity > 5 ? 'ok' : 'restock';
}

const group = inventory.groupBy( myCallback );

/* group is:
{ 
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ], 
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ] 
}
*/
```

Como puedes ver es una manera muy práctica de hacer agrupaciones que estoy seguro muchos desarrolladores/as comenzaran a usar.

El otro método usado es *Array.groupByToMap* básicamente lo que hace es lo mismo que su compañero pero en vez de retornar un objeto, retorna un *Map*. 

```
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas',  type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];

const restock  = { restock: true };
const sufficient = { restock: false };

const result = inventory.groupByToMap( ({ quantity }) => quantity < 6 ? restock : sufficient );
console.log(result.get(restock));
// expected output: Array [Object { name: "bananas", type: "fruit", quantity: 5 }]
```

Tiene un detalle. Al usar este método ten presente que debes usar la misma key para obtener el/los elemento/s.

## Operator

### Coalescing operator

¿ Estas cansado de usar el operador ternario ? ¿ Crees que deberían haber maneras más sencillas de validar datos ? ¿ leíste lo anterior con voz de comerciante en televisión ?. Hay una solución para lo anterior ( excepto la voz de comerciante ) y es la implementación de este nuevo operador lógico.

```
const customer = {
	firstName: 'fernando',
	lastName: 'pineda',
	age: 30,
	isActive: true,
	address: {
		city: 'Bogota',
		country: 'Colombia',
	}
}

// Let's say you want to get the address information
// but as these information could be optional
// you need to validate if the field has data

/*
	let customerAddress = null
	if ( customer.addess && customer.addess.city ) {
		customerAddress = customer.address
	} else {
		customerAddress = {
			city: '',
			country: ''
		}
	}
*/

// A shorter way of doing the above is

const customerAddress = customer.address ?? { city: '', country: '' }
```

El uso de los dobles signos de interrogación permite comparar el valor del operando a la izquierda del operador, si este es un valor Nullish (null, undefined. Esta es u diferencia con el operando || que considera valores Falsy ), retorna el operando de la derecha.