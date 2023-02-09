
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
  - [Trailing commas in array](https://github.com/denysdovhan/wtfjs/blob/master/README.md#trailing-commas-in-array)
  - [Array equality is a monster](https://github.com/denysdovhan/wtfjs/blob/master/README.md#array-equality-is-a-monster)
  - [`undefined` and `Number`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#undefined-and-number)
  - [`parseInt` is a bad guy](https://github.com/denysdovhan/wtfjs/blob/master/README.md#parseint-is-a-bad-guy)
  - [Math with `true` and `false`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#math-with-true-and-false)
  - [HTML comments are valid in JavaScript](https://github.com/denysdovhan/wtfjs/blob/master/README.md#html-comments-are-valid-in-javascript)
  - [`NaN` is ~~not~~ a number](https://github.com/denysdovhan/wtfjs/blob/master/README.md#nan-is-not-a-number)
  - [`[]` and `null` are objects](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-and-null-are-objects)
  - [Magically increasing numbers](https://github.com/denysdovhan/wtfjs/blob/master/README.md#magically-increasing-numbers)
  - [Precision of `0.1 + 0.2`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#precision-of-01--02)
  - [Patching numbers](https://github.com/denysdovhan/wtfjs/blob/master/README.md#patching-numbers)
  - [Comparison of three numbers](https://github.com/denysdovhan/wtfjs/blob/master/README.md#comparison-of-three-numbers)
  - [Funny math](https://github.com/denysdovhan/wtfjs/blob/master/README.md#funny-math)
  - [Addition of RegExps](https://github.com/denysdovhan/wtfjs/blob/master/README.md#addition-of-regexps)
  - [Strings aren't instances of `String`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#strings-arent-instances-of-string)
  - [Calling functions with backticks](https://github.com/denysdovhan/wtfjs/blob/master/README.md#calling-functions-with-backticks)
  - [Call call call](https://github.com/denysdovhan/wtfjs/blob/master/README.md#call-call-call)
    - [A `constructor` property](https://github.com/denysdovhan/wtfjs/blob/master/README.md#a-constructor-property)
  - [Object as a key of object's property](https://github.com/denysdovhan/wtfjs/blob/master/README.md#object-as-a-key-of-objects-property)
  - [Accessing prototypes with `__proto__`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#accessing-prototypes-with-__proto__)
  - [`` `${{Object}}` ``](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-object-)
  - [Destructuring with default values](https://github.com/denysdovhan/wtfjs/blob/master/README.md#destructuring-with-default-values)
  - [Dots and spreading](https://github.com/denysdovhan/wtfjs/blob/master/README.md#dots-and-spreading)
  - [Labels](https://github.com/denysdovhan/wtfjs/blob/master/README.md#labels)
  - [Nested labels](https://github.com/denysdovhan/wtfjs/blob/master/README.md#nested-labels)
  - [Insidious `try..catch`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#insidious-trycatch)
  - [Is this multiple inheritance?](https://github.com/denysdovhan/wtfjs/blob/master/README.md#is-this-multiple-inheritance)
  - [A generator which yields itself](https://github.com/denysdovhan/wtfjs/blob/master/README.md#a-generator-which-yields-itself)
  - [A class of class](https://github.com/denysdovhan/wtfjs/blob/master/README.md#a-class-of-class)
  - [Non-coercible objects](https://github.com/denysdovhan/wtfjs/blob/master/README.md#non-coercible-objects)
  - [Tricky arrow functions](https://github.com/denysdovhan/wtfjs/blob/master/README.md#tricky-arrow-functions)
  - [Arrow functions can not be a constructor](https://github.com/denysdovhan/wtfjs/blob/master/README.md#arrow-functions-can-not-be-a-constructor)
  - [`arguments` and arrow functions](https://github.com/denysdovhan/wtfjs/blob/master/README.md#arguments-and-arrow-functions)
  - [Tricky return](https://github.com/denysdovhan/wtfjs/blob/master/README.md#tricky-return)
  - [Chaining assignments on object](https://github.com/denysdovhan/wtfjs/blob/master/README.md#chaining-assignments-on-object)
  - [Accessing object properties with arrays](https://github.com/denysdovhan/wtfjs/blob/master/README.md#accessing-object-properties-with-arrays)
  - [`Number.toFixed()` display different numbers](https://github.com/denysdovhan/wtfjs/blob/master/README.md#numbertofixed-display-different-numbers)
  - [`Math.max()` less than `Math.min()`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#mathmax-less-than-mathmin)
  - [Comparing `null` to `0`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#comparing-null-to-0)
  - [Same variable redeclaration](https://github.com/denysdovhan/wtfjs/blob/master/README.md#same-variable-redeclaration)
  - [Default behavior Array.prototype.sort()](https://github.com/denysdovhan/wtfjs/blob/master/README.md#default-behavior-arrayprototypesort)
  - [resolve() won't return Promise instance](https://github.com/denysdovhan/wtfjs/blob/master/README.md#resolve-wont-return-promise-instance)
  - [`{}{}` is undefined](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-is-undefined)
  - [`arguments` binding](https://github.com/denysdovhan/wtfjs/blob/master/README.md#arguments-binding)
  - [An `alert` from hell](https://github.com/denysdovhan/wtfjs/blob/master/README.md#an-alert-from-hell)
  - [An infinite timeout](https://github.com/denysdovhan/wtfjs/blob/master/README.md#an-infinite-timeout)
  - [A `setTimeout` object](https://github.com/denysdovhan/wtfjs/blob/master/README.md#a-settimeout-object)
  - [Double dot](https://github.com/denysdovhan/wtfjs/blob/master/README.md#double-dot)
  - [Extra Newness](https://github.com/denysdovhan/wtfjs/blob/master/README.md#extra-newness)
  - [Why you should use semicolons](https://github.com/denysdovhan/wtfjs/blob/master/README.md#why-you-should-use-semicolons)
    - [Split a string by a space](https://github.com/denysdovhan/wtfjs/blob/master/README.md#split-a-string-by-a-space)
  - [A stringified string](https://github.com/denysdovhan/wtfjs/blob/master/README.md#a-stringified-string)
  - [Non-strict comparison of a number to `true`](https://github.com/denysdovhan/wtfjs/blob/master/README.md#non-strict-comparison-of-a-number-to-true)
- [📚 Other resources](https://github.com/denysdovhan/wtfjs/blob/master/README.md#-other-resources)
