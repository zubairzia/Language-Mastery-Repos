JavaScript uses objects to group related data together, and arrays are a special kind of object used to store ordered lists.
For the were-squirrel example, each day’s journal entry is best represented as one object, and all entries together are stored in an array.
An object is a collection of properties (key–value pairs).
Creating an object
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};


Property names are keys (squirrel, events)

Values can be anything: booleans, strings, arrays, other objects

Accessing properties
day1.squirrel      // false
day1.wolf          // undefined (property doesn’t exist)

Adding or changing properties
day1.wolf = false; // creates a new property

Property name rules

Valid identifiers don’t need quotes

Names with spaces or special characters must be quoted

let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

Objects vs code blocks

{} at the start of a statement → code block

{} anywhere else → object

This rarely causes confusion in practice

Deleting and checking properties
Deleting a property
delete anObject.left;

Checking if a property exists
"left" in anObject   // false
"right" in anObject  // true


⚠️ Important difference

Setting a property to undefined → property still exists

Deleting a property → property is completely gone

Getting object properties
Object.keys({x: 0, y: 0, z: 2});
// ["x", "y", "z"]

Copying properties between objects
Object.assign(objectA, {b: 3, c: 4});


Copies properties into an existing object

Overwrites properties with the same name

Arrays

Arrays are objects specialized for ordered data

typeof [] → "object"

Think of them as objects with numbered keys (0, 1, 2, ...)

The journal structure (important takeaway)

The journal is:

An array

Each element is an object

Each object has:

events → array of strings

squirrel → boolean

let journal = [
  { events: ["work", "touched tree", "pizza"], squirrel: false },
  { events: ["weekend", "cycling", "beer"], squirrel: true }
];

Core takeaway

👉 Objects group related data
👉 Arrays store ordered lists
👉 Complex data = arrays of objects

Start with something simple
1️⃣ Simple data (single value)
let number = 5;
let name = "Jacques";
let squirrel = false;


Each variable holds one thing.

Group related data → Object

Suppose you want to describe one day.

A day has:

Did Jacques turn into a squirrel?

What events happened?

That’s more than one value, but they belong together.

let day = {
  squirrel: false,
  events: ["work", "pizza", "running"]
};


👉 This is one object
👉 It represents one day

Think of an object as a labeled box:

day
 ├─ squirrel → false
 └─ events → ["work", "pizza", "running"]

Multiple days → Array

Now imagine many days, not just one.

Arrays are good at holding lists:

let journal = [];


But what goes inside the array?

Each element is one day → which we already decided should be an object.

Array of objects (THIS is the big idea)
let journal = [
  {
    squirrel: false,
    events: ["work", "pizza"]
  },
  {
    squirrel: true,
    events: ["weekend", "cycling", "beer"]
  }
];


Read it in English:

“journal is an array, and each item in the array is an object that describes one day.”

Visualize it (important)
journal (array)
 ├─ [0] → { squirrel: false, events: [...] }
 └─ [1] → { squirrel: true,  events: [...] }


So:

Array → holds many things

Object → describes one thing

Array of objects → many described things

Why is this called “complex data”?

Because it’s nested:

An array

containing objects

containing arrays

Example:

journal[1].events[2]
// "beer"


Break it down:

journal[1] → second day (object)

.events → its events array

[2] → third event

Real-world analogy 🧠
Library example

Book = object

{ title: "Eloquent JS", pages: 450 }


Library = array of books

[
  { title: "Eloquent JS", pages: 450 },
  { title: "You Don’t Know JS", pages: 300 }
]


📌 A library is not one book → it’s an array of book objects

One-sentence rule (memorize this)

Use an object to describe one thing.
Use an array to store many of those things.

That’s it. That’s the whole concept.
