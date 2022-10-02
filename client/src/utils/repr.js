export function getPrice(product) {
  return product.price_on_request
    ? "По запросу"
    : product.price
    ? product.price.toFixed(2) + " р/шт"
    : "-";
}

export function encodeUri(str) {
  return encodeURI(str).replace(
    /\(|\)|%20/g,
    function (m) {
      return {
        '(': '%28',
        ')': '%29',
        '%20': '+'
      }[m];
    });
};
