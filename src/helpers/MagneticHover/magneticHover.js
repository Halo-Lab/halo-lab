import Validator from './validator';
/**
 * @class
 */
export default class MagneticHover {
  /**
   * @param {Object} options of arguments
   * @param  {HTMLElement} options.element
   * @param  {number} options.radius radius around the element on which it is triggered callback
   * @callback options.callback The callback that handles the response.
   */

  /**
   * @function callback of MagneticHover
   * @param  {number} distance
   */
  constructor(options) {
    this._checkArguments(options);
    const callback = options.callback || (distance => console.log(distance));
    this.element = options.element;
    this.radius = options.radius;
    this.cb = callback;
    this._handleMouseMove = this._handleMouseMove.bind(this);
    this._distance = 0;
    this._init();
  }

  /**
   * @return {Object} elementPosition - element coordinates
   * @return {number} elementPosition.top
   * @return {number} elementPosition.left
   * @return {number} elementPosition.right
   * @return {number} elementPosition.bottom
   */
  get _elementPosition() {
    const elementCoordinate = this.element.getBoundingClientRect();
    return {
      left: elementCoordinate.left + document.body.scrollLeft,
      right: elementCoordinate.left + this.element.offsetWidth,
      top: elementCoordinate.top + document.body.scrollTop,
      bottom: elementCoordinate.top + this.element.offsetHeight,
    };
  }

  /**
   * @return {Object} checks intersection with an element along the x axis
   * @return {boolean} intersection X axis
   */
  get _intersectX() {
    const { left, right } = this._elementPosition;
    return Math.min(this.mouseX, right) >= Math.max(this.mouseX, left);
  }

  /**
   * @return {Object} checks intersection with an element along the y axis
   * @return {boolean} intersection Y axis
   */
  get _intersectY() {
    const { top, bottom } = this._elementPosition;
    return Math.min(this.mouseY, bottom) >= Math.max(this.mouseY, top);
  }

  /**
   * @return  {Object} _mouseMoveRange this getter return object with mouse move range coordinates
   * @return {Object} rangePosition
   * @return {number} rangePosition.right
   * @return {number} rangePosition.bottom
   */
  get _mouseMoveRange() {
    const { left, right, top, bottom } = this._elementPosition;
    const coordinatX = this._intersectX
      ? this.mouseX
      : right < this.mouseX
      ? right
      : left;
    const coordinatY = this._intersectY
      ? this.mouseY
      : bottom < this.mouseY
      ? bottom
      : top;
    return {
      x: coordinatX,
      y: coordinatY,
    };
  }

  /**
   * @method _getHypotenuse this function find hypotenuse of equilateral triangle
   * @param  {number} sideX length of the side
   * @param  {number} sideY length of the side
   * @return {number}
   */
  _getHypotenuse(sideX, sideY) {
    return (sideX ** 2 + sideY ** 2) ** (1 / 2);
  }

  /**
   * @method  _getPercent this function return currentValue value in persent
   * @param  {} maxValue
   * @param  {} currentValue
   * @return {number}
   */
  _getPercent(maxValue, currentValue) {
    return Math.floor((Math.abs(currentValue) / maxValue) * 100);
  }

  /**
   * @method _getDiagonalDistance this function find length from element to cursor and return value in persent
   * @return {nubmer}
   */
  _getDiagonalDistance() {
    const distanceX = this._mouseMoveRange.x - this.mouseX;
    const distanceY = this._mouseMoveRange.y - this.mouseY;
    const hypotenuse = this._getHypotenuse(distanceX, distanceY);
    return Math.floor(hypotenuse);
  }

  /**
   * @method _getResultingDistance this function return distance to element in the ratio from 1 to 100
   * @return {number} distance
   */
  _getResultingDistance() {
    const resultingDistance = this._getPercent(
      this.radius,
      this._getDiagonalDistance()
    );

    return resultingDistance;
  }

  /**
   * @method _isWithinRange This function check cursor position in element radius range
   * @param  {number} distance distance to element
   * @param  {number} radius range radius
   * @return {boolean}
   */
  _isWithinRange() {
    return this._getDiagonalDistance() < this.radius;
  }

  /**
   * @method _handleMouseMove event listener
   * @param  {number} x cursor position on x axis
   * @param  {number} y cursor position on x axis
   * @return {null}
   */
  _handleMouseMove({ clientX, clientY }) {
    this.mouseX = clientX;
    this.mouseY = clientY;
    if (this._isWithinRange()) {
      this._distance = this._getResultingDistance();
    } else {
      this._distance = 100;
    }
    // console.log(this._distance);
    this.cb(this._distance);
  }

  /**
   * @method _checkArgument check class arguments
   * @param  {object} args
   * @param  {boolean} args.check some expression, which return boolean
   * @param  {string} eargs.rrorMessage error message
   * @return {null}
   */
  _checkArguments(args) {
    if (!Validator.checkOnElement(args.element)) {
      Validator.showError('element is not HTMLElement');
    }
    if (!Validator.checkOnType(args.radius, 'number')) {
      Validator.showError('radius must be a number');
    }
    if (!Validator.checkOnType(args.callback, 'function')) {
      Validator.showError('callback must be a function');
    }
  }

  _init() {
    window.addEventListener('mousemove', this._handleMouseMove);
  }
  /**
   * @method destroy remove event listener from window
   */
  destroy() {
    window.removeEventListener('mousemove', this._handleMouseMove);
  }
}
