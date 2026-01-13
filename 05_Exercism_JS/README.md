# Exercism JavaScript Track 

This directory contains my solutions for the **JavaScript Track** on [Exercism](https://exercism.org/tracks/javascript). These exercises were completed to build a professional foundation in ECMAScript standards, covering everything from basic logic to advanced asynchronous patterns and object-oriented concepts.

## Folder Contents

This directory contains the following exercise implementations:

* **hello-world.js**: Basic syntax and function exports.
* **lasagna.js** & **lasagna-master.js**: Functions, constants, and default/rest parameters.
* **annalyns-infiltration.js**: Boolean logic and conditional branching.
* **freelancer-rates.js**: Working with numbers and the `Math` object.
* **door-policy.js**: String manipulation and indexing.
* **vehicle-purchase.js**: Comparison and conditional logic.
* **bird-watcher.js**: Array iteration using `for` loops.
* **mixed-juices.js**: `while` loops and `switch` statements.
* **high-score-board.js**: Object property management (CRUD operations).
* **lucky-numbers.js**: Type coercion and falsy/truthy values.
* **enchantments.js**: Basic and advanced array methods (push, pop, splice, etc.).
* **fruit-picker.js**: Implementing callback functions.
* **amusement-park.js**: Nullish coalescing (`??`) and optional chaining (`?.`).
* **coordinate-transformation.js**: Functional programming, closures, and memoization.
* **service.js**: Asynchronous JavaScript, Promises, and error handling.
* **appointment-time.js**: Working with Dates and Time.
* **assembly-line.js**: Conditional logic and number precision.
* **captains-log.js**: Randomness and advanced string formatting.
* **custom-signs.js**: Template literals and string interpolation.
* **factory-sensors.js**: Exception handling and custom error classes.
* **food-chain.js**: Complex string patterns and recursion logic.
* **ozans-playlist.js**: Working with `Set` objects for unique collections.
* **pizza-order.js**: Recursive function calls and accumulation.
* **regular-chatbot.js**: Regular Expressions (RegEx) for pattern matching.
* **train-driver.js**: Array destructuring and rest/spread syntax.
* **windowing-system.js**: Prototype-based inheritance and Class syntax.


## 🛠️ Problems Faced & Learnings

* Struggled with implementing a pure memoization function in `coordinate-transformation.js` where the closure had to track state without polluting the global scope.
* Faced issues with "floating point errors" in `freelancer-rates.js`; learned that JavaScript's IEEE 754 representation requires specific rounding strategies for financial accuracy.
* In `service.js`, I initially failed to handle the "retry" logic for flaky API simulations; resolved this by implementing recursive Promise chains with proper rejection handling.
* Dealt with prototype chain confusion in `windowing-system.js` while trying to simulate inheritance before switching to the cleaner ES6 `class` syntax.
* learned to use `Promise.all()` to execute independent promises in parallel rather than sequentially, improving execution speed.
* Found that Regular Expression greedy matching in `regular-chatbot.js` was capturing more than intended; learned to use lazy quantifiers (`.*?`) for precise pattern isolation.
* Realized that using `==` (loose equality) in `lucky-numbers.js` caused bugs with `null` and `0`; moved to strict equality `===` as a standard practice to ensure type safety.