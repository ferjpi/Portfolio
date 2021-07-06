---
title: Closure scope
date: 2021-07-06T19:48:12.298Z
image: /assets/closure.jpeg
---
# Closure scope

We hear this question a lot in interviews, What's closure scope?. The why, is because you probably are gonna use this concept a lot.

Closure scope is the scope our function has, i.e. when you create a function, an invisible object is created, this object stored and has access to all the params and variables defined inside the function, this is what is technically call closure scope.

The way I like to remember is imaging a woman in gestation, The baby is gonna received all the nutrients from the mother and not otherwise.

Let's imagine you have a function and inside that function, you have another function that makes something with the variables and params from the parent. The child function has access to the variables and params from the parent but not otherwise.

```js
    function initRecord(type) {
        let id = 0;
        
        return (name, song) => {
            id += 1;
            
            return {
                id,
                name,
                song,
                type
            }
        }
    }
    
    const genreType = initRecord('pop');
    const song1 = genreType('Jorja Smith', 'so lonely')
```

In the example above we create a function call *init*, this function receives a param of type string and inside this function we defined a variable call *id*. *id* is initialized with *0* and we return an anonymous function that receives two params *name* and *song*. Inside the child function we increase the value of *id* in *1*. So as result with have the following:

```js
    { id: 1, name: 'Jorja Smith', song: 'so lonely', type: 'pop' }
```

The above is a clear example of how you use the concept of closure.

I hope this short example help you understand a little better this concept.