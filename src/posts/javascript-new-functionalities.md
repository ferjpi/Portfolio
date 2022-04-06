---
title: "JavaScript: New Functionalities"
date: 2022-04-06T15:52:43.231Z
image: /assets/es_portrait.svg
---
Every year we have new updates in JavaScript that allow us to make our logic more readable and if possible with fewer lines of code.

In this little writing, I am going to mention some of these for which I am excited.

## Array

### Array.prototype.at

This functionality is one of those that I think “Why the hell, they didn't put it in long ago”. As everyone knows, to access an element that is in a list through the index, the index must be passed inside square braces, i.e.

```
const list = ['banana', 'coconut', 'pineapple']

const lastElement = list[2] // pineapple
```

What you see above is pretty good BUT there are details when you want to access the last elements of the list. You would assume that you can access the last element of the list in the same way that you do for the first but no, you could not be more wrong, and this is where you do not understand the decisions that the ECMAScript committee makes

```
const list = ['banana', 'coconut', 'pineapple']

const lastElement = list[-1] // undefined

// The correct way to iterate thru the list in reverse order
// is practically doing an operation. The length of the list - the element

const lastElement = list[list.length - 1] // pineapple
```

Yes, this is when you wonder why they do that and you just have to accept reality.

But luckily some people are sane and understand that there must be easier ways to do this, and this is where *.at* comes in.

```
const list = ['banana', 'coconut', 'pineapple']

const firstElement = list.at(0) // banana
const lastElement = list.at(-1) // pineapple
```

This is beautiful. Thanks to those people who thought of this and made it possible.

### Array.prototype.groupBy and Array .prototype.groupByToMap

It hasn't happened to you that you have a list of elements and you need to group them by a specific data type, if it hasn't happened to you, what the hell are you doing? To achieve this type of grouping, there are several ways to do it, but generally, it was necessary to iterate through each of the elements, initialize an empty collection and add the elements in the desired format.

Now with the addition of these methods, it couldn't be easier.

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

Simple right? These methods will help many developers to reduce time on their jobs and reduce the number of lines of code.

By the way, this is not the only way to do it, as such, the method receives or expects a function that receives the element as a parameter, which allows you to play with how you want to do the groupings or the logic for them.

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

As you can see, it is a very practical way of making groups that I am sure many developers will begin to use.

The other method used is *Array.groupByToMap* basically what it does is the same as its partner but instead of returning an object, it returns a *Map*.

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

It has a detail. When using this method keep in mind that you must use the same key to get the item(s).

##Operator

### Coalescing operator

Are you tired of using the ternary operator? Do you think there should be easier ways to validate data? Did you read the above with the voice of a merchant on television? There is a solution for the above (except the merchant's voice) and it is the implementation of this new logical operator.

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

The use of double question marks allows comparing the value of the operand to the left of the operator, if this is a Nullish value (null, undefined. This is its difference with the operand || that considers Falsy values), it returns the operand of the right.