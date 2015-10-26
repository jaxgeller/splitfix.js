(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SplitFix = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ScrollFix = (function () {
  function ScrollFix(a, b, c, breakpoint) {
    _classCallCheck(this, ScrollFix);

    this.elToFix = a;
    this.coordinator = b;
    this.containers = Array.prototype.slice.call(document.querySelectorAll(c));

    this.breakPoint = breakpoint;

    this.ticking = false;
    window.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('resize', this.update.bind(this));
  }

  _createClass(ScrollFix, [{
    key: 'onScroll',
    value: function onScroll() {
      if (!this.ticking && window.innerWidth > this.breakPoint) {
        requestAnimationFrame(this.update.bind(this));
        this.ticking = true;
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      this.containers.forEach(function (item) {
        var windowPos = window.scrollY;
        var rect = item.getBoundingClientRect();
        var top = rect.top + windowPos;

        _this.el = item.querySelector(_this.elToFix);
        var coordinator = item.querySelector(_this.coordinator);

        if (windowPos > top && windowPos < top + rect.height) {
          _this._setStyle('fixed', '0', 'initial');

          if (coordinator.getBoundingClientRect().bottom - _this.el.getBoundingClientRect().height <= 0) {
            _this._setStyle('absolute', 'initial', '0');
          }
        } else {
          _this._setStyle('absolute', '0', 'initial');
        }
      });

      this.ticking = false;
    }
  }, {
    key: '_setStyle',
    value: function _setStyle(position, top, bottom) {
      this.el.style.position = position;
      this.el.style.top = top;
      this.el.style.bottom = bottom;
    }
  }]);

  return ScrollFix;
})();

exports['default'] = ScrollFix;
module.exports = exports['default'];

},{}]},{},[1])(1)
});