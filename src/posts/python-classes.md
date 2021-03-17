---
title: Python classes
date: 2021-03-17T22:25:40.588Z
image: /assets/closurescope.png
---
*** All the content below is subjective, and its a way to reforce the new things I'm learning***

Python takes inspiration from classes in _C++_ and _Modula-3_. It allows to create and build objects that can inherit or share the same type. These are call instances.

An instance is an object of a certain class with attributes and methods that allow managing the state of the instance



In python, you can inherit classes or create your own. And is relatively simple to do it, i.e.



    class Person():

      is_human= True
      has_hear= True
      is_tall= False



As you can see the syntax is pretty simple. To define a _class_ you only have to use the reserve word __class__ followed by the name of the class with the first work capitalize, follow by parenthesis.



In the example above you can see variables that define characteristics of a person which are call class attributes.



Class attributes do not change between objects of the same class.



You must differentiate between class attributes and instance attributes. These two as the name indicate have two different scopes (thinking as a javascript developer) or namespaces.



For example.


   class Person():

     is_human= True
     has_hear= True
     is_tall= False


     def __init__(self, name):

      self.name= name
      self.is_tall= True



What do you think would be the response? True or False?.



Is True. You should picture it like two circles. The first one, comprehend the entire class (all the scope); the second the init method or instance initializer.



When you initialize a class what has priority is the instance method and what is in their scope.


    Nick = Person(“nick”)
    Nick.is_tall # True



I jump somethings, like for example what is __\_\_init\_\___, what's its role. Well, it’s a special method of python, which is called when you initialize an object from a class. I.e. in the example above the _init_ method takes the name value and assigns it as an attribute of our new object.



Let’s summarize. Python classes are very important and useful. With it, you can construct all the utilities you need or functionalities that you require