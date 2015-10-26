# SplitFix.js

SplitFix.js is a slim, performant, ES6 module, that implements a split view fixed effect.

### Install

`npm install splitfix.js` or include `dist.min.js` above.

### Example

SplitFix makes some quick assumptions about the layout of your site.
You need a containing element with left and right splits. The simplest form looks like this,

Html Setup

```html
<style>
  .container { position: relative; height: 200vh;}
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

let elToBeFixed = '.is-fixed';
let splitContent = '.split-content';
let container = '.container';

new SplitFix(elToBeFixed, splitContent, container);
```
