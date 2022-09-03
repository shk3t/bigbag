export function getPrice(product) {
  return product.price
    ? product.price.toFixed(2) + " р/шт"
    : product.price_on_request
    ? "По запросу"
    : "-";
}
