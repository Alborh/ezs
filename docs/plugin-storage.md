# storage

## Présentation

Ce plugin est propose une série d'instructions pour stocker et récuper des flux d'objets JSON

## installation

```bash
npm install @ezs/storage
```

## usage

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [load](#load)
-   [flow](#flow)
-   [save](#save)
-   [identify](#identify)
-   [boost](#boost)

### load

With a `String`, containing a URI throw all the documents that match

#### Parameters

-   `data`  
-   `feed`  
-   `domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** domain ID (that should contains the uri input) (optional, default `ezs`)

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### flow

Take an `Object` and replace it with all the objects of the same domain contained in the store.
Warning: order is not guaranteed

#### Parameters

-   `data`  
-   `feed`  
-   `domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** domain ID (same for all objects) (optional, default `ezs`)
-   `length` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** limit the number of output objects

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### save

Take `Object`, to save it into a store and throw an URL

#### Parameters

-   `data`  
-   `feed`  
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path containing the object Identifier (optional, default `uri`)
-   `domain` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** domain ID (same for all objects) (optional, default `ezs`)
-   `reset` **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** if the store already exists, you will erase all previous content (optional, default `false`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### identify

Take `Object`, and compute & add a identifier

#### Parameters

-   `data`  
-   `feed`  
-   `scheme` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** scheme prefix (optional, default `uid`)
-   `path` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** path containing the object Identifier (optional, default `uri`)

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### boost

Takes an `Object` delegate processing to an external pipeline and cache the result

#### Parameters

-   `data`  
-   `feed`  
-   `file` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** the external pipeline is described in a file
-   `script` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** the external pipeline is described in a string of characters
-   `commands` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** the external pipeline is described in a object
-   `command` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** the external pipeline is described in a URL-like command
-   `key` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** the cache key form the stream, in not provided, it's computed with the first chunk
-   `cleanupDelay` **[Number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Frequency (seconds) to cleanup the cache (10 min) (optional, default `600`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
