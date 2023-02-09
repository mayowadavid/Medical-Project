export const getDiscountAmt = (final, original) => {
  return original - final;
};
export const getDiscountPercentage = (final, original) => {
  return Math.round((getDiscountAmt(final, original) / original) * 100);
};
