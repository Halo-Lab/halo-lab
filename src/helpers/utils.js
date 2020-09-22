function isValidEmail(email) {
  const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  return regexp.test(email);
}

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

export default isValidEmail;
