export function formatPrice(price) {
  const formattedPrice = (Math.round(Number(price) * 100) / 100).toFixed(2);
  return formattedPrice;
}

export function calculatePrice(products) {
  if (products.length === 0) {
    return { formattedPrice: '0.00', formattedSavedPrice: '0.00' };
  }
  const total = products.reduce((totalSum, { product, qty }) => {
    const selectedPrice = product.has_promotion
      ? product.price_promotional
      : product.price;

    return totalSum + selectedPrice * qty;
  }, 0);

  const totalSaved = products.reduce((totalSum, { product, qty }) => {
    const selectedPrice = product.price;

    return totalSum + selectedPrice * qty;
  }, 0);

  const formattedPrice = formatPrice(total);
  const formattedSavedPrice = formatPrice(totalSaved);

  return { formattedPrice, formattedSavedPrice };
}

export function calculateCashback(products) {
  if (products.length === 0) {
    return { formattedPrice: '0.00' };
  }
  const total = products.reduce((totalSum, { product: { cback }, qty }) => {
    return totalSum + cback * qty;
  }, 0);

  const totalSaved = products.reduce((totalSum, { product, qty }) => {
    const selectedPrice = product.price;

    return totalSum + selectedPrice * qty;
  }, 0);

  const formattedPrice = formatPrice(total);
  const formattedSavedPrice = formatPrice(totalSaved);

  return { formattedPrice, formattedSavedPrice };
}

export function customCalculatePrice(products) {
  if (products.length === 0) {
    return { formattedPrice: '0.00', formattedSavedPrice: '0.00' };
  }
  const total = products.reduce((totalSum, product) => {
    const selectedPrice = product.has_promotion
      ? product.price_promotional
      : product.price;

    return totalSum + selectedPrice * product.qty;
  }, 0);

  const totalSaved = products.reduce((totalSum, product) => {
    const selectedPrice = product.price;

    return totalSum + selectedPrice * product.qty;
  }, 0);

  const formattedPrice = formatPrice(total);
  const formattedSavedPrice = formatPrice(totalSaved);

  return { formattedPrice, formattedSavedPrice };
}

export function calculatePriceBeta(products) {
  if (!products.length) {
    return 0;
  }

  const total = products.reduce(
    (totalSum, { price_promotional, qty }) =>
      totalSum + price_promotional * qty,
    0
  );

  const formattedPrice = formatPrice(total);

  return formattedPrice;
}

export function calculateCashbackBeta(products) {
  if (!products.length) {
    return 0;
  }

  const total = products.reduce(
    (totalSum, { cashback, qty }) => totalSum + cashback * qty,
    0
  );

  const formattedPrice = formatPrice(total);

  return formattedPrice;
}
