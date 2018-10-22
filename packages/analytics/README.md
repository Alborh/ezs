# A collection of `ezs` analytics functions.

This package cannot be used alone. [ezs](https://www.npmjs.com/package/ezs) has to be installed

## Usage

```js
import ezs from 'ezs';
import analytics from 'ezs-analytics';

ezs.use(analytics);

process.stdin
    .pipe(ezs('STATEMENT_NAME', { STATEMENT_PARAMETERS })
    .pipe(process.stdout);
```

# Statements

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [count](#count)
-   [distinct](#distinct)
-   [distribute](#distribute)
-   [less](#less)
-   [less](#less-1)
-   [exploding](#exploding)
-   [graph](#graph)
-   [greater](#greater)
-   [groupingByEquality](#groupingbyequality)
-   [groupingByHamming](#groupingbyhamming)
-   [groupingByLevenshtein](#groupingbylevenshtein)
-   [groupingByModulo](#groupingbymodulo)
-   [keys](#keys)
-   [maximizing](#maximizing)
-   [merging](#merging)
-   [minimizing](#minimizing)
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

## count

Take `Object` object getting some fields with json path, and do ...

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## distinct

Take `Object` object getting some fields with json path, and do ...

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path (optional, default `id`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## distribute

Take `Object` like { id, value } and throw a serie of number value

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)
-   `step` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** step between each valut (optional, default `1`)
-   `start` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** first value to throw (optional, default `minvalueinthestream`)
-   `size` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** size of the distribution (optional, default `(minvalue-maxvalue)inthestream`)
-   `default` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** default value for missing object (optional, default `0`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## less

Take `Object` and throw the same object only if there the value of the select field is not equals than a value

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path of the field to compare (optional, default `value`)
-   `if` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** value to compare (optional, default `''`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## less

Take `Object` and throw the same object only if there the value of the select field is less (or equal) than a value

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path of the field to compare (optional, default `value`)
-   `than` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** value to compare (optional, default `0`)
-   `strict` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** less than but not equal (optional, default `false`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## exploding

Take `Object` and take values with [value] path (must be an array)
and throw object of each value. The new object is build with [id] and eac value.

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## graph

Take `Object` object getting some fields with json path, and do ...

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## greater

Take `Object` and throw the same object only if there the value of the select field is greater (or equal) than a value

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path of the field to compare (optional, default `value`)
-   `than` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** value to compare (optional, default `0`)
-   `strict` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** greater than but not equal (optional, default `false`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## groupingByEquality

Take `Object` like { id, value } and reduce all value with the same id in single object

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## groupingByHamming

Take `Object` like { id, value } and reduce all value with
ID which have the same Hamming distance in single object

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## groupingByLevenshtein

Take `Object` like { id, value } and reduce all value with
ID which have the same Levenshtein distance in single object

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)
-   `distance` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** minimal levenshtein distance to have a same id (optional, default `1`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## groupingByModulo

Take `Object` like { id, value } and reduce all value with the same modulo comptuation in ansingle object

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## keys

Take `Object` and throws all its keys

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## maximizing

Take special `Object` like {id, value} and replace value with the max of values

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## merging

Take special `Object` like {id, value} and replace value with the merge of values

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## minimizing

Take special `Object` like {id, value} and replace value with the min of values

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## pair

Take `Object` object getting some fields with json path, and do ...

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## pluck

Take `Object` object getting value of fields (with json path)
and throws a object of each value

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use form group by (optional, default `id`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## reducing

Take `Object` group value of { id, value } objectpath

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## segment

Take `Object` object getting some fields with json path, and
throw segment of value. Ex: get [a,b,c] and throw [a,b], [b,c]

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path (optional, default `value`)
-   `aggregate` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** aggregate all values for all paths (or not) (optional, default `true`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## slice

Take `Object` and throw the same object onl if there in the section of the stream between start and start + size
stream is numbered from 1

**Parameters**

-   `data`  
-   `feed`  
-   `start` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** start of the slice (optional, default `0`)
-   `size` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** size of the slice (optional, default `10`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## sort

Take all `Object` and sort them with dedicated key

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## summing

Take special `Object` like {id, value} and replace value with the sum of values

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## topics

Take `Object` and take values with [value] path (must be an array)

**Parameters**

-   `data`  
-   `feed`  
-   `id` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for id (optional, default `id`)
-   `value` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for value (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## tune

Take all `Object` and sort them with selected field

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path to use for the sort key (optional, default `id`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## value

Take `Object` object and getting the value field

**Parameters**

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the pah of the value field (optional, default `value`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 