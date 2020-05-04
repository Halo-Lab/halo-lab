export default class Validator {
  /**
   * @param  {HTMLElement} element
   * @return {boolean}
   */
  static checkOnElement(element) {
    return (
      element instanceof HTMLElement ||
      element instanceof HTMLBodyElement ||
      element instanceof HTMLBodyElement
    );
  }
  /**
   * @param  {number || string } arg
   * @param  {string} type for example "string"
   */
  static checkOnType(arg, type) {
    return typeof arg === type;
  }
  /**
   * @param  {string} message error message
   */
  static showError(message) {
    throw new Error(message);
  }
}
