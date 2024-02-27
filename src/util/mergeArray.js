export const mergeArrays = (a, b) => {
  const merged = [];
  if (a === null) {
    return null;
  }
  if (b === null) {
    return null;
  }
  for (let i = 0; i < a.length; i++) {
    merged.push(a[i]);
    merged.push(b[i]);
  }
  return merged;
};
