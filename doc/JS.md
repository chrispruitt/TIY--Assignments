### Format for _Reading JavaScript_

----
### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```

### [Primitive: Boolean]

* _symbol_: `boolean`
* _pronunciation_: "boo-lee-in"
* _examples_: 
```javascript
true == true;
```

### [Number]

* _symbol_: `n/a`
* _pronunciation_: Number
* _examples_:
```javascript
1 2 4 6 7 9
```

### [String]

* _symbol_: `Anything between single or double quotes`
* _pronunciation_: string
* _examples_:
```javascript
"This is a string of seven words"
```

### [RegExp]

* _symbol_: ``
* _pronunciation_: 
* _examples_:
```javascript

```

### [Array]

* _symbol_: `[ ]`
* _pronunciation_: uh-ray
* _examples_:
```javascript
[7, 'cat', true, 'squirrel']
```

### [Infinity]

* _symbol_: `sideways 8`
* _pronunciation_: in-fin-it-ee
* _examples_:
```javascript
6 + infinity === infinity
```

### [NaN = Not a Number]

* _symbol_: `NaN`
* _pronunciation_: not a number
* _examples_:
```javascript
3 / 0 === NaN
```

### [Undefined]

* _symbol_: `Undefined`
* _pronunciation_: un-de-fyned
* _examples_:
```javascript
var dog = 

function(dog) = variable undefined
```

### [Array]

* _symbol_: `[ ]`
* _pronunciation_: uh-ray
* _examples_:
```javascript
var array = [6, 'dog', 22, , 'animal']
var array = new Array(6, "dog", 22, "animal")
```

### [Length]

* _symbol_: `.length`
* _pronunciation_: ling-th
* _examples_:
```javascript
var dog = "poodle";
dog.length //would return 7

var numbers = [2, 4, 6, 8];
if (numbers.length > 2) {
    numbers.length = 2;
}   /*expect to shorten the length to 2 elements*/
```

### [Pop]

* _symbol_: .pop()
* _pronunciation_: paw-p
* _examples_:
```javascript
var cat = ['feline', 'siamese', 'tabby'];
var popped = cat.pop();
console.log(popped); // ['feline', 'siamese'];
```

### [Push]

* _symbol_: .push()
* _pronunciation_: push
* _examples_:
```javascript
var cars = ['jeep', 'toyota'];
var final = cars.push('honda', 'scion');

console.log(cars); // ['jeep', 'toyota', 'honda', 'scion']
```

### [Splice]

* _symbol_: .splice(start, deleteCount, 'added item') 
* _pronunciation_: splyce
* _examples_:
```javascript
var dog = ['beagle', 'poodle', 'shepherd'];
dog.splice(1, 0, 'mutt');

console.log(dog); // ['beagle', 'mutt', 'poodle', 'shepherd'];
//mutt added

dog.splice(2, 1);
console.log(dog); // ['beagle', 'mutt', 'shepherd']; 
//poodle deleted
```

### [Shift]

* _symbol_: .shift()
* _pronunciation_: shift dummy
* _examples_:
```javascript
var cars = ['jeep', 'toyota', 'honda'];
cars.shift();

console.log(cars); // ['toyota', 'honda'];
```


### [forEach]

* _symbol_: .forEach();
* _pronunciation_: fohr-ee-ch
* _examples_:
```javascript
what the hell


```

### [Every]

* _symbol_: .every()
* _pronunciation_: e-ver-ee
* _examples_:
```javascript
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true



```

### [Filter]

* _symbol_: .filter()
* _pronunciation_: fill-terr
* _examples_:
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]


```

### [Map]

* _symbol_: .map()
* _pronunciation_: map
* _examples_:
```javascript
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]


```

### [Pluck]
(https://lodash.com/docs#pluck)

* _symbol_: _.pluck
* _pronunciation_: pl-uh-k
* _examples_:
```javascript
var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

_.pluck(users, 'user');
// → ['barney', 'fred']

var userIndex = _.indexBy(users, 'user');
_.pluck(userIndex, 'age');
// → [36, 40] (iteration order is not guaranteed)


```

### [Reject]
(https://lodash.com/docs#reject)
* _symbol_: _.reject
* _pronunciation_: ree-jekt
* _examples_:
```javascript
var odds = _.reject([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// → [1, 3]

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

// using the "_.property" callback shorthand
_.pluck(_.reject(users, 'active'), 'user');
// → ['barney']

// using the "_.matches" callback shorthand
_.pluck(_.reject(users, { 'age': 36 }), 'user');
// → ['fred']


```

### [Where]
(https://lodash.com/docs#where)
* _symbol_: _.where
* _pronunciation_: weh-r
* _examples_:
```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'status': 'busy', 'pets': ['hoppy'] },
  { 'user': 'fred',   'age': 40, 'status': 'busy', 'pets': ['baby puss', 'dino'] }
];

_.pluck(_.where(users, { 'age': 36 }), 'user');
// → ['barney']

_.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
// → ['fred']

_.pluck(_.where(users, { 'status': 'busy' }), 'user');
// → ['barney', 'fred']


```

### []

* _symbol_:
* _pronunciation_:
* _examples_:
```javascript



```


























