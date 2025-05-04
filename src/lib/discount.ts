export const calculateDiscount = (originalPrice: number, discount: number) => {
  const discounted = originalPrice - (originalPrice * discount) / 100;

  if (discounted <= 0) return 0;

  const rounded = Math.round(discounted);

  const hundreds = Math.floor(rounded / 100) * 100;
  const remainder = rounded % 100;

  let finalPrice = 0;

  if (remainder <= 50) {
    finalPrice = hundreds + (remainder === 0 ? 0 : 0);
  } else {
    finalPrice = hundreds + 50;
  }

  return finalPrice;
};
