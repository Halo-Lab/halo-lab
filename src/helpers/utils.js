function isValidEmail(email) {
  const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  return regexp.test(email);
}

export default isValidEmail;
