
## Creational pattern:

### Constructor:

`creates objects through functions`

the `new` keyword:

* Creates a brand new object
* Links to an object prototype
* Binds `this` to the new object scope. Implicitly returns `this`

### Module pattern:

`object literal`

* simple way to encapsulate methods
* creates a *toolbox* of functions to use

### Factory pattern:

`simplifies object creation`

* Simplifies object creation
* Creating different objects based on need 
* Repository Creation

### Singleton

`Used to restrict an object to one instance of that object across the application.`

* Remembers the last time you used it 
* Hands the same instance back 
* Node.js uses CommonJS


# Table of Contents

- [💪🏻 Motivation](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-motivation)
- [✍🏻 Notation](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-notation)
- [👀 Examples](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-examples)
  - [`[]` is equal `![]`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-is-equal-)
  - [`true` is not equal `![]`, but not equal `[]` too](https://github.com/denysdovhan/wtfjs/blob/master/README.md#true-is-not-equal--but-not-equal--too)
  - [true is false](https://github.com/denysdovhan/wtfjs/blob/master/README.md#true-is-false)
  - [baNaNa](https://github.com/denysdovhan/wtfjs/blob/master/README.md#banana)
  - [`NaN` is not a `NaN`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#nan-is-not-a-nan)
  - [`Object.is()` and `===` weird cases](https://github.com/denysdovhan/wtfjs/blob/master/README.md#objectis-and--weird-cases)
  - [It's a fail](https://github.com/denysdovhan/wtfjs/blob/master/README.md#its-a-fail)
  - [`[]` is truthy, but not `true`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-is-truthy-but-not-true)
  - [`null` is falsy, but not `false`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#null-is-falsy-but-not-false)
  - [`document.all` is an object, but it is undefined](https://github.com/denysdovhan/wtfjs/blob/master/README.md#documentall-is-an-object-but-it-is-undefined)
  - [Minimal value is greater than zero](https://github.com/denysdovhan/wtfjs/blob/master/README.md#minimal-value-is-greater-than-zero)
  - [function is not a function](https://github.com/denysdovhan/wtfjs/blob/master/README.md#function-is-not-a-function)
  - [Adding arrays](https://github.com/denysdovhan/wtfjs/blob/master/README.md#adding-arrays)
  - [Trailing commas in array](#trailing-commas-in-array)
  - [Array equality is a monster](#array-equality-is-a-monster)
  - [`undefined` and `Number`](#undefined-and-number)
  - [`parseInt` is a bad guy](#parseint-is-a-bad-guy)
  - [Math with `true` and `false`](#math-with-true-and-false)
  - [HTML comments are valid in JavaScript](#html-comments-are-valid-in-javascript)
  - [`NaN` is ~~not~~ a number](#nan-is-not-a-number)
  - [`[]` and `null` are objects](#-and-null-are-objects)
  - [Magically increasing numbers](#magically-increasing-numbers)
  - [Precision of `0.1 + 0.2`](#precision-of-01--02)
  - [Patching numbers](#patching-numbers)
  - [Comparison of three numbers](#comparison-of-three-numbers)
  - [Funny math](#funny-math)
  - [Addition of RegExps](#addition-of-regexps)
  - [Strings aren't instances of `String`](#strings-arent-instances-of-string)
  - [Calling functions with backticks](#calling-functions-with-backticks)
  - [Call call call](#call-call-call)
    - [A `constructor` property](#a-constructor-property)
  - [Object as a key of object's property](#object-as-a-key-of-objects-property)
  - [Accessing prototypes with `__proto__`](#accessing-prototypes-with-__proto__)
  - [`` `${{Object}}` ``](#-object-)
  - [Destructuring with default values](#destructuring-with-default-values)
  - [Dots and spreading](#dots-and-spreading)
  - [Labels](#labels)
  - [Nested labels](#nested-labels)
  - [Insidious `try..catch`](#insidious-trycatch)
  - [Is this multiple inheritance?](#is-this-multiple-inheritance)
  - [A generator which yields itself](#a-generator-which-yields-itself)
  - [A class of class](#a-class-of-class)
  - [Non-coercible objects](#non-coercible-objects)
  - [Tricky arrow functions](#tricky-arrow-functions)
  - [Arrow functions can not be a constructor](#arrow-functions-can-not-be-a-constructor)
  - [`arguments` and arrow functions](#arguments-and-arrow-functions)
  - [Tricky return](#tricky-return)
  - [Chaining assignments on object](#chaining-assignments-on-object)
  - [Accessing object properties with arrays](#accessing-object-properties-with-arrays)
  - [`Number.toFixed()` display different numbers](#numbertofixed-display-different-numbers)
  - [`Math.max()` less than `Math.min()`](#mathmax-less-than-mathmin)
  - [Comparing `null` to `0`](#comparing-null-to-0)
  - [Same variable redeclaration](#same-variable-redeclaration)
  - [Default behavior Array.prototype.sort()](#default-behavior-arrayprototypesort)
  - [resolve() won't return Promise instance](#resolve-wont-return-promise-instance)
  - [`{}{}` is undefined](#-is-undefined)
  - [`arguments` binding](#arguments-binding)
  - [An `alert` from hell](#an-alert-from-hell)
  - [An infinite timeout](#an-infinite-timeout)
  - [A `setTimeout` object](#a-settimeout-object)
  - [Double dot](#double-dot)
  - [Extra Newness](#extra-newness)
  - [Why you should use semicolons](#why-you-should-use-semicolons)
    - [Split a string by a space](#split-a-string-by-a-space)
  - [A stringified string](#a-stringified-string)
  - [Non-strict comparison of a number to `true`](#non-strict-comparison-of-a-number-to-true)
- [📚 Other resources](#-other-resources)
