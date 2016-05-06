# html
General html manipulation functions


### Implements

- attributes.stringify - Capitalise first letter of first word (all words) in input string


### Install

```
npm install @cubitworx/html
```


### Usage

```
// name-1="value-1" name-2="value-2 value-3" name-3="value-4 value-5"
console.log( attributes.stringify({
  'name-1': 'value-1'
  'name-2': ['class-2','class-3'],
  'name-3': 'value-4 value-5',
}) );
```


## Copyright and license

Code and documentation copyright 2016 Charles Louw. Code released under [the MIT license](https://github.com/cubitworx/cw-string-polyfill.git/LICENSE).
