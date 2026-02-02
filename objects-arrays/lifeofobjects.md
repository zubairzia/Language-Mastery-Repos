📌 Eloquent JavaScript – Chapter 6 Notes

The Secret Life of Objects

This repository contains my notes and examples from Chapter 6 of Eloquent JavaScript, focused on how JavaScript uses objects, prototypes, and classes to structure programs.

🧠 Concepts Covered
Encapsulation

Organizing programs into objects that manage their own state

Separating public interfaces from internal implementation

Using conventions to represent private properties

Methods & this

Methods as object properties holding functions

How this is determined by the call site

Using call to explicitly bind this

Difference between regular functions and arrow functions

Prototypes

Prototype chain and property lookup

Object.prototype as the root ancestor

Sharing behavior via prototypes

Creating objects with custom prototypes using Object.create

Classes

Constructor functions and the new keyword

Class syntax as sugar over prototypes

Instance properties vs prototype methods

Class expressions

Overriding Properties

How instance properties shadow prototype properties

Using prototypes for defaults and instances for exceptions

Maps

Problems with using plain objects as maps

Map as a safer and more powerful key-value data structure

Core methods: set, get, has

Polymorphism

Objects responding differently to the same method

Writing code that depends on interfaces, not concrete types

Customizing built-in behavior like toString

Symbols

Symbols as unique property keys

Avoiding property name collisions

Defining custom interfaces safely

Iterators

How for/of works internally

The iterator protocol using Symbol.iterator

Building custom iterable data structures

Implementing a 2D Matrix with an iterator

🎯 Key Takeaway

JavaScript is fundamentally prototype-based.
Classes provide a cleaner syntax, but understanding prototypes is essential for mastering object-oriented JavaScript.

📚 Source

Based on Chapter 6 – The Secret Life of Objects from
📖 Eloquent JavaScript by Marijn Haverbeke
