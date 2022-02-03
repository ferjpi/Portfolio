---
title: Prototypal Inheritance
date: 2021-04-20T00:53:04.605Z
image: /assets/website-design-and-development.jpeg
---
I could say that this is the way JavaScript handles inheritance. And the way to do it is through a chain of prototypes.

There are many ways to do prototype chains. In this article, I'm gonna try to explain three ways to do it.

* Functional
* Constructor function
* Class-syntax constructor

## Functional:

This way of doing prototypal inheritance consist in using Object.create:


```
  const dog = {
    woof: function () { console.log(this.name + ': woof') }
  }


  const cat = Object.create(apple, {
    prrr: { value: function () { console.log(this.name + ': miau') } }
  })


  const spark = Object.create(cat, {
    name: { value: 'spark' }
  })

  spark.woof() // spark: woof

  spark.prrr() // spark: miau
```


You should be wondering what is and does Object.create. Object.create is a method that creates a new object base on the prototype of another object. It takes as first argument the object you want to inherit the prototype and as the second argument the [property descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) (this are optional).



What you can tell about who is inheriting from who?. Well, the answer is very simple, spark is inheriting from cat and cat from dog. You can check this by doing


```
  console.log(Object.getPrototypeOf(spark) === cat) // true

  console.log(Object.getPrototypeOf(cat) === dog) // true
```


You could think you can do the same by destructuring the object. i.e


```
  const dog = {
    woof: function () { console.log(this.name + ': woof') }
  }

  const cat = {
    ...dog,
    prrr: function () { console.log(this.name + ': miau') }
  }

  const spark = {
    ...cat,
    name: "Spark"
  }
```


What you think will happen if I call spark.prrr() ?


```
  spark.prrr() // Spark: miau
```


It works!. BUT spark and cat are not inheriting, what are doing is copying an object into another.


So if you do


```
  console.log(Object.getPrototypeOf(spark) === cat) // false

  console.log(Object.getPrototypeOf(spark) === Object.prototype) // true
```


As you see spark has the same prototype that the Object prototype.



## Constructor Functions:

This approach consists of using the prototypes of the functions and set prototypes on them and then call *new*.


```
  function Wolf (name) {
    this.name = name
  }


  Wolf.prototype.howl = function () {
    console.log(this.name + ': awoooooooo')
  }

  function Dog (name) {
    Wolf.call(this, name + ' the dog')
  }

  function inherit (proto) {
    function ChainLink(){}
    ChainLink.prototype = proto
    return new ChainLink()
  }

  Dog.prototype = inherit(Wolf.prototype)

  Dog.prototype.woof = function () {
    console.log(this.name + ': woof')
  }

  const rufus = new Dog('Rufus')


  rufus.woof() // prints "Rufus the dog: woof"

  rufus.howl() // prints "Rufus the dog: awoooooooo"
```


## Class-syntax constructors:

Since ECMAScript 2015, they added a *class* keyword. This is a syntax sugar cuz uses a function under the hood.


```
  class Wolf { 

    constructor (name) {   
      this.name = name 
    } 

    howl () { console.log(this.name + ': awoooooooo') }

  }


  class Dog extends Wolf {

    constructor(name) {
      super(name + ' the dog')
    }

    woof () { console.log(this.name + ': woof') }

  }

  const rufus = new Dog('Rufus')

  rufus.woof() // prints "Rufus the dog: woof"

  rufus.howl() // prints "Rufus the dog: awoooooooo"

```


Do not confuse yourself, this *class* keyword is not the same as the one you find in other OOP languages.


You can check some example in [codesandbox](https://codesandbox.io/s/protoype-inheritance-6buzg)