# SplitFix.js

SplitFix.js is a slim, performant, ES6 module, that implements a split view fixed effect.

You can see a demo [here](https://grandy.io)

### Install

`npm install splitfix.js` or include `dist.min.js` above.

### Example

SplitFix makes some quick assumptions about the layout of your site.
You need a containing element with left and right splits. A simple example looks like this,

HTML Setup

```html
<style>
  .container { overflow: hidden; position: relative; height: 200vh;}
  .not-fixed {
    height: 100%;
    width: 50%;
    float: left;
  }
  .fixed {
    right: 0;
    height: 200px;
    width: 50%;
    float: left;
  }
</style>
<div class="container">
  <section class="not-fixed"></section>
  <section class="fixed"></section>
</div>
```
JS Setup

```javascript
import SplitFix from 'splitfix.js';

let elToBeFixed = '.fixed';
let splitContent = '.not-fixed';
let container = '.container';

new SplitFix(elToBeFixed, splitContent, container);
```


### Use

Since this is a specific effect, the way in which it's implemented is opinionated. HTML setup needs to be like so

```html
<div class="container">
  <section class="not-fixed"></section>
  <section class="fixed"></section>
</div>
```

Where `.container` has a position of `relative` and the `.fixed` class has the direction 0'ed.

With HTML setup, just create a new instance of ScrollFix

```javascript
new ScrollFix(fixedEl, notFixedEl, container);
```

SplitFix is intended to be a split layout, so for responsive design there will be a point where you dont want it fixed anymore. Call the same function above with a fourth parameter like so

```javascript
new ScrollFix(fixedEl, notFixedEl, container, 960);
```
