# template-dom [![Build Status](https://travis-ci.org/lexi-lambda/template-dom.svg?branch=master)](https://travis-ci.org/lexi-lambda/template-dom)

This package provides a way to use ES2015 tagged template strings to create (virtual) DOM nodes without needing to use HTML syntax or any runtime parsing. It works with any (V)DOM library you want to use.

## Installation

```
$ npm install template-dom
```

## Quick Start

### With `virtual-dom`

```js
import templateDom from 'template-dom';
import h from 'virtual-dom/h';

const D = templateDom(h);
```

### With `react`

```js
import templateDom from 'template-dom';
import { createElement } from 'react';

const D = templateDom(createElement);
```

### Creating an element

```js
const page =
  D.div `
    ${D.h1 `Hello, world!`}
    ${D.p `This is a paragraph with some ${D.strong `bold`} text.`}
    ${D.button({ class: 'big' }) `Click Me`}`
```

## More Details

The `template-dom` module’s default export is a function that expects a single argument. The provided argument should be a function with the following signature:

```
(tag, attrs, children) -> any
```

This function will be used by `template-dom` to create a node from a tagged template string.

The base function provided by `template-dom` is `element`, which allows creating nodes of a particular type. For example, using React:

```js
const el = templateDom(React.createElement).element;

const PageHeader = ({ text }) =>
  el('h1', { className: 'page-header' }) `Page: ${text}`;
```

The first argument to `element` does not need to be a string, so it can be used with React components, for example.

In addition to the `element` function, `template-dom` provides helper functions that are partially-applied versions of `element`, specialized to HTML tags. These can be used instead of passing a string to the `element` function:

```js
const { div, h1, p } = templateDom(React.createElement);

const page = div `
  ${h1 `Hello!`}
  ${p `Here is some text.`}`;
```
