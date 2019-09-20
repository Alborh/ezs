# analytics

Ce plugin est propose une série d'instructions pour croiser, compter, trier, agréger des flux d’objets Javascript

## installation

```bash
npm install @es/analytics
```

## usage

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [count](#count)
-   [distinct](#distinct)
-   [distribute](#distribute)
-   [drop](#drop)
-   [exploding](#exploding)
-   [filter](#filter)
-   [graph](#graph)
-   [greater](#greater)
-   [groupingByEquality](#groupingbyequality)
-   [groupingByHamming](#groupingbyhamming)
-   [groupingByLevenshtein](#groupingbylevenshtein)
-   [groupingByModulo](#groupingbymodulo)
-   [keys](#keys)
-   [less](#less)
-   [maximizing](#maximizing)
-   [merging](#merging)
-   [minimizing](#minimizing)
-   [output](#output)
-   [pair](#pair)
-   [pluck](#pluck)
-   [reducing](#reducing)
-   [segment](#segment)
-   [slice](#slice)
-   [sort](#sort)
-   [summing](#summing)
-   [topics](#topics)
-   [tune](#tune)
-   [value](#value)

### count

Take `Object` object getting some fields with json path, and do ...

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### distinct

Take `Object` object getting some fields with json path, and do ...

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path (optional, default `"id"`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### distribute

Take `Object` like { id, value } and throw a serie of number value

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `"id"`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `"value"`)
-   `step` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** step between each valut (optional, default `1`)
-   `start` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** first value to throw (optional, default `minvalueinthestream`)
-   `size` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** size of the distribution (optional, default `(minvalue-maxvalue)inthestream`)
-   `default` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** default value for missing object (optional, default `0`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### drop

Take `Object` and throw the same object only if there the value of the select field is not equals than a value

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path of the field to compare (optional, default `"value"`)
-   `if` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** value to compare (optional, default `""`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### exploding

Take `Object` and take values with [value] path (must be an array)
and throw object of each value. The new object is build with [id] and eac value.

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `"id"`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `"value"`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### filter

Take `Object` and throw the same object only if there the value of the select field is equals than a value

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path of the field to compare (optional, default `"value"`)
-   `if` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** value to compare (optional, default `""`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### graph

Take `Object` object getting some fields with json path, and do ...

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### greater

Take `Object` and throw the same object only if the value of the selected
field is greater (or equal) than a value

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path of the field to compare (optional, default `"value"`)
-   `than` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** value to compare (optional, default `0`)
-   `strict` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** greater than but not equal (optional, default `false`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### groupingByEquality

Take `Object` like `{ id, value }` and reduce all values with the same `id`
in a single object

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### groupingByHamming

Take `Object` like `{ id, value }` and reduce all `value` with `id` which
have the same Hamming distance in a single object

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `"id"`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `"value"`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### groupingByLevenshtein

Take `Object` like `{ id, value }` and reduce all `value`s with
`id` which have the same Levenshtein distance in a single object

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)
-   `distance` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** minimal levenshtein distance to have a same id (optional, default `1`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### groupingByModulo

Take `Object` like `{ id, value }` and reduce all `value`s with the same
modulo computation in a ansingle object

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### keys

Take `Object` and throws all its keys

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### less

Take `Object` and throw the same object only if the value of the selected
field is less (or equal) than a value

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path of the field to compare (optional, default `value`)
-   `than` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** value to compare (optional, default `0`)
-   `strict` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** less than but not equal (optional, default `false`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### maximizing

Take special `Object` like `{id, value}` and replace `value` with the max of `value`s

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### merging

Take special `Object` like `{id, value}` and replace `value` with the merge of `value`s

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### minimizing

Take special `Object` like `{id, value}` and replace `value` with the min of
`value`s

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### output

TO BE DESCRIBED

#### Parameters

-   `keyName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `indent` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
-   `extract` **any**

### pair

Take `Object` object getting some fields with json path, and do ...

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### pluck

Take `Object` object getting value of fields (with json `path`) and throws an
object for each value

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use form group by (optional, default `id`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### reducing

Take `Object` group value of `{ id, value }` objectpath

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### segment

Take `Object` object getting some fields with json path, and throw segment of
value. Ex: get `[a,b,c]` and throw `[a,b], [b,c]`

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path (optional, default `value`)
-   `aggregate` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** aggregate all values for all paths (or not) (optional, default `true`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### slice

Take `Object` and throw the same object only if it is in the section of the
stream between start and start + size. stream is numbered from 1

#### Parameters

-   `start` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** start of the slice (optional, default `0`)
-   `size` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** size of the slice (optional, default `10`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### sort

Take all `Object` and sort them with dedicated key

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### summing

Take special `Object` like `{id, value}` and replace `value` with the sum of
`value`s

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### topics

Take `Object` and take values with [value] path (must be an array)

#### Parameters

-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### tune

Take all `Object` and sort them with selected field

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for the sort key (optional, default `id`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### value

Take `Object` object and getting the value field

#### Parameters

-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the pah of the value field (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**