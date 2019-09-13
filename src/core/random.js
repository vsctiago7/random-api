export const generateNumber = (req, res, next) => {
  const num = (Math.random() * 100).toFixed(0);
  const fixed = num !== 0 ? num : 1;
  return fixed;
};