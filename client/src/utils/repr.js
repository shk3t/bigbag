export function getPrice(product) {
  return product.price_on_request
    ? "По запросу"
    : product.price
    ? product.price.toFixed(2) + " р/шт"
    : "-";
}
