# template-dom

This package provides a way to use ES2015 tagged template strings to create (virtual) DOM nodes without needing to use HTML syntax or any runtime parsing. It works with any (V)DOM library you want to use.

## Installation

```
$ npm install template-dom
```

## Quick Start

```js
import templateDom from 'template-dom';
import h from 'virtual-dom/h';

const D = templateDom(h);

const page =
  D.div `
    ${D.h1 `Hello, world!`}
    ${D.p `This is a paragraph with some ${D.strong `bold`} text.`}
    ${D.button({ class: 'big' }) `Click Me`}`
```
