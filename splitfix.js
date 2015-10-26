export default class ScrollFix {
  constructor(a, b, c, breakpoint) {
    this.elToFix = a;
    this.coordinator = b
    this.containers = Array.prototype.slice.call(document.querySelectorAll(c));

    this.breakPoint = breakpoint;

    this.ticking = false;
    window.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('resize', this.update.bind(this));
  }


  onScroll() {
    if(!this.ticking && window.innerWidth > this.breakPoint) {
      requestAnimationFrame(this.update.bind(this));
      this.ticking = true;
    }
  }

  update() {
    this.containers.forEach(item => {
      let windowPos = window.scrollY;
      let rect = item.getBoundingClientRect();
      let top = rect.top + windowPos;

      this.el = item.querySelector(this.elToFix);
      let coordinator = item.querySelector(this.coordinator);

      if (windowPos > top && windowPos < top + rect.height) {
        this._setStyle('fixed', '0', 'initial');

        if (coordinator.getBoundingClientRect().bottom - this.el.getBoundingClientRect().height <= 0) {
          this._setStyle('absolute', 'initial', '0');
        }
      } else {
        this._setStyle('absolute', '0', 'initial');
      }

    });

    this.ticking = false;
  }

  _setStyle(position, top, bottom) {
    this.el.style.position = position;
    this.el.style.top = top;
    this.el.style.bottom = bottom;
  }
}
