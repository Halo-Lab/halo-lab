function getBreakpoint(value = '') {
  if (typeof value === 'number') {
    return value;
  }

  switch (value) {
    case 'xs':
      return 0;
    case 'sm':
      return 576;
    case 'md':
      return 768;
    case 'lg':
      return 992;
    case 'xl':
      return 1200;
    case 'xxl':
      return 1900;
    default:
      return 992;
  }
}

export default getBreakpoint;
