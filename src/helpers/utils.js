function isValidEmail(email) {
  const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  return regexp.test(email);
}

/**
 * Сall a callback function depending on the ref position, when scrolling the window
 *
 * @param {Object} ref - react ref
 * @callback callback - call with a value of true/false
 * @return {Function}  - remove scroll listener
 *
 */
export function scrollEffect(ref, callback) {
  const handler = () => {
    const pos = ref.current.getBoundingClientRect();
    if (pos.y <= 0 && -pos.y < pos.height) {
      return callback(true);
    }
    callback(false);
  };

  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
}

/**
 * Return an array of categories with links based on main category
 *
 * @param {Object} mainCategory - main category
 * @param {Array} childCategories - array of categories without links
 * @return {Array}  - array of categories with main category
 *
 */
export function getCategories(mainCategory, childCategories) {
  let categories = childCategories.map(item => {
    return {
      ...item,
      link: `${mainCategory.link}?category=${item.slug}`,
    };
  });

  return [mainCategory, ...categories];
}

export default isValidEmail;
