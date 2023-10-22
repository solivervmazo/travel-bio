export const aspectRatio = (height, width) => {
  const width = image.naturalWidth;

  const gcd = (...arr) => {
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
  };

  const gcdResult = gcd(width, height);

  return `${width / gcdResult}/${height / gcdResult}`;
};
