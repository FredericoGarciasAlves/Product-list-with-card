function numberIncDec(element, quantityNumberMany) {
  const productNumberMany = element.querySelector(".number");
  productNumberMany.innerText = quantityNumberMany;
}

// calcular o preço de cada produto do menu
function priceProducMult(quantityNumberMany, index, dataFood) {
  // let arrayItensPrice = [];
  // arrayCartItensIndex.forEach((element, index) => {
  //   let itensPrice = dataFood[element].price;
  //   arrayItensPrice.push(itensPrice);

  // });
  const itensPrice = dataFood[index].price;
  return itensPrice * quantityNumberMany;
}

export { numberIncDec, priceProducMult };
