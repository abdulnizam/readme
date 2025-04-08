const isEmptyObject = (obj) =>
  obj && typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length === 0