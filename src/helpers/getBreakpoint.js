const getBreakpoint = function(width) {
  if (width >= 992) {
    return 'desktop';
  }

  if (width >= 768) {
    return 'tablet';
  }

  return 'mobile';
};

export default getBreakpoint;
