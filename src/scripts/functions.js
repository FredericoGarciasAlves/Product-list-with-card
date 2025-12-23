function numberIncDec(element, quantityNumberMany) {
  const productNumberMany = element.querySelector(".number");
  productNumberMany.innerText = quantityNumberMany;
}

function numberIncDecCart(elementHTML, quantityNumberMany) {
  // elemento que irá quantityNumberMany dinâmicamente dentro do cart

  elementHTML.forEach(element, (idex) => {});
}

// calcular o preço de cada produto do menu
function priceProducMult(quantityNumberMany, index, dataFood) {
  const itensPrice = dataFood[index].price;
  return itensPrice * quantityNumberMany;
}
// função para calcular o pedido total

export { numberIncDec, priceProducMult };
