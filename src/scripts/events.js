// 1. Adicionar a quantidade de produtos selecionado no menu no carrinho

import { dataFood } from "./dataFood.js";
import { numberIncDec, priceProducMult } from "./functions.js";

const btnAddcart = document.querySelectorAll(".btn-add-cart");
const afterDiv = document.querySelectorAll(".after-div");
const emptyCakeImg = document.getElementById("empty-cake-img");
const emptyTextcart = document.getElementById("empty-text-cart");
const nameProduct = document.querySelectorAll(".name-product");
const priceProduct = document.querySelectorAll(".price-product");
const containerOrder = document.getElementById("container-order");

const productList = document.querySelectorAll(".product-list");

const arrayPriceProduct = Array.from(priceProduct);
const arrayNameProduct = Array.from(nameProduct);
const arrayBtnAddCart = Array.from(btnAddcart);
const arrayAfterDiv = Array.from(afterDiv);
const arrayProductList = Array.from(productList);

let priceOrderTotal = 0;

arrayProductList.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    const btnAddcart = e.target.closest(`.btn-add-cart`);
    if (btnAddcart) {
      priceOrderTotal = priceOrderTotal + dataFood[index].price;
    }
  });
});

// adicionando a caixa de incremento e decremento e a borda
arrayBtnAddCart.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    arrayAfterDiv[index].innerHTML = `
    <div class="inc-dec-box">
        <button class="inc-btn">
        </button>
        <span class="number">1</span>
        <button class="dec-btn">
        </button> 
    </div> 
`;
    afterDiv[index].style.border = "3px solid #c73b0f";
    // removendo o botão de adicionar item no carrinho
    arrayBtnAddCart[index].remove();

    emptyCakeImg.style.display = "none";
    emptyTextcart.style.display = "none";
  });
});

// Adicionando o produto no carrinho com um objeto

let myCartShopping = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
arrayBtnAddCart.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    containerOrder.innerHTML += `
    <div class="box-cart-order">
        <div class="box-order">
            <div class="box-order-info">
                <h3 class="title-order">${dataFood[index].name}</h3>
                <div class="box-price-order">
                    <div class="number-order">1x</div>
                    <div class="price-order">@ $${dataFood[index].price.toFixed(
                      2
                    )}</div>
                    <div class="calculation-order" id="${index}">$${dataFood[
      index
    ].price.toFixed(2)}</div>
                </div>
            </div>
            <img class="icon-box-order" src="../assets/icons/icon-remove-item.svg" alt="Icon to remove order from cart"/> 
        </div>
    </div>
    `;
    let food = {
      name: dataFood[index].name,
      price: dataFood[index].price,
      quantity: dataFood[index].quantity,
      priceTotal: dataFood[index].price,
      url: dataFood[index].url,
      description: dataFood[index].description,
      active: true,
    };
    myCartShopping[index] = food;
    console.log(myCartShopping);
  });
});

// Adionando os elementos fixos no carrinho, como o texto carbon neutral info

arrayBtnAddCart.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const containerFixedCart = `
    <div class="box-order-total">
        <span class="text-order-total">Order total</span>
        <span class="total-box-order-total"></span>
    </div> 
    <div class="box-carbon-neutral">
        <img src="../assets/icons/icon-carbon-neutral.svg" alt="Icon of a tree" class="icon-box-carbon-neutral">
        <p class="text-box-carbon-neutral">This is a <span class="span-box-carbon-neutral">carbon-neutral</span> delivery</p>
    </div>
    <div class="box-btn-confirm">
        <button class="btn-confirm" type="button">Confirm Order</button>
    </div> 
`;

    const boxOrderTotal = document.querySelector(".box-order-total");
    if (!boxOrderTotal) {
      containerOrder.insertAdjacentHTML("afterend", containerFixedCart);
    }
  });
});

// Ao clicar no botão de + ou - aumenta ou diminui o número no menu e calcular o preço com base na quantidade de itens adicionados no carrinho

let quantityNumberMany = 1;
let arrayQuantityNumberMany = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let arrayQuantityNumberManyCart = [];

arrayProductList.forEach((elementProductList, index) => {
  elementProductList.addEventListener("click", (e) => {
    const iconIncrement = e.target.matches(".inc-btn");
    const iconDecrement = e.target.matches(".dec-btn");
    const productNumberMany = elementProductList.querySelector(".number");
    const calculationOrder = document.getElementById(`${index}`);
    const orderTotal = document.querySelector(".total-box-order-total");
    const boxIncDec = document.getElementsByClassName(`inc-dec-box`);

    orderTotal.textContent = `$${priceOrderTotal.toFixed(2)}`;
    if (iconIncrement) {
      quantityNumberMany = arrayQuantityNumberMany[index];
      quantityNumberMany++;
      arrayQuantityNumberMany.splice(index, 1, quantityNumberMany);
      numberIncDec(elementProductList, quantityNumberMany);
      // Clico no botão de increment adicionar o numero de produtos dentro de number order
      const arrayBoxIncDec = Array.from(boxIncDec);

      arrayBoxIncDec.forEach((element, indexBoxIncDec) => {});

      const calcMult = priceProducMult(quantityNumberMany, index, dataFood);
      calculationOrder.textContent = `$${calcMult.toFixed(2)}`;
      priceOrderTotal = priceOrderTotal + dataFood[index].price;
      orderTotal.textContent = `$${priceOrderTotal.toFixed(2)}`;
      myCartShopping[index].quantity = quantityNumberMany;
      myCartShopping[index].priceTotal = calcMult.toFixed(2);
      console.log(index);
      const titleOrder = document.querySelectorAll(".title-order");
      const arrayTitleOrder = Array.from(titleOrder);
      arrayTitleOrder.forEach((element, i) => {
        if (element.textContent === myCartShopping[index].name) {
          const numberOrder = document.querySelectorAll(".number-order");
          numberOrder[i].textContent = `${quantityNumberMany}x`;
        }
      });
      console.log(myCartShopping);
    }
    if (iconDecrement) {
      if (arrayQuantityNumberMany[index] !== 1) {
        quantityNumberMany = arrayQuantityNumberMany[index];
        quantityNumberMany--;
        arrayQuantityNumberMany.splice(index, 1, quantityNumberMany);
        numberIncDec(elementProductList, quantityNumberMany);

        const calcMult = priceProducMult(quantityNumberMany, index, dataFood);
        calculationOrder.textContent = `$${calcMult.toFixed(2)}`;
        priceOrderTotal -= dataFood[index].price;
        orderTotal.textContent = `$${priceOrderTotal.toFixed(2)}`;
        const titleOrder = document.querySelectorAll(".title-order");
        const arrayTitleOrder = Array.from(titleOrder);
        arrayTitleOrder.forEach((element, i) => {
          if (element.textContent === myCartShopping[index].name) {
            const numberOrder = document.querySelectorAll(".number-order");
            numberOrder[i].textContent = `${quantityNumberMany}x`;
          }
        });
      }
    }
  });
});

arrayAfterDiv.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {});
});

// adicionando a box Confirmed Order

const boxCart = document.querySelector(".box-cart");

boxCart.addEventListener("click", (e) => {
  const btnConfirmOrder = e.target.matches(".btn-confirm");
  if (btnConfirmOrder) {
    const arrayFiltered = myCartShopping.filter((element) => {
      return element.active === true;
    });

    let arrayProduct = undefined;
    arrayFiltered.reverse().forEach((element, index) => {
      if (arrayProduct === undefined) {
        arrayProduct = ` 
    <div class="product-container">
      <div class="product-box">
        <img src="${element.url}" alt="${
          element.description
        }" class="img-product-box">
        <h6 class="title-food">${element.name}</h6>
        <div class="amount-box">
          <span class="quantity">${element.quantity}x</span>
          <span class="price-food">@ <span class="dollar-sign">$</span>${Number(
            element.priceTotal
          ).toFixed(2)}</span>
        </div>
      </div>
      <span class="unit-price">$${Number(element.price).toFixed(2)}</span>
    </div>
    <hr class="hr-product"/>
    `;
      } else {
        arrayProduct += ` 
    <div class="product-container">
      <div class="product-box">
        <img src="${element.url}" alt="${
          element.description
        }" class="img-product-box">
        <h6 class="title-food">${element.name}</h6>
        <div class="amount-box">
          <span class="quantity">${element.quantity}x</span>
          <span class="price-food">@ <span class="dollar-sign">$</span>${Number(
            element.priceTotal
          ).toFixed(2)}</span>
        </div>
      </div>
      <span class="unit-price">$${Number(element.price).toFixed(2)}</span>
    </div>
    <hr class="hr-product"/>
    `;
      }
    });
    const boxOrderConfirmed = `
    <div class="box-order-confirmed-opacity-absolute">
      <div class="box-order-confirmed-display-flex">
        <div class="box-order-confirmed">
          <img src="../../assets/icons/icon-order-confirmed.svg" alt="Icone de confirmação" class="box-order-confirmed-icon" />
          <h2 class="box-order-confirmed-title">
            Order Confirmed
          </h2>
          <p class="box-order-confirmed-text">
            We hope you enjoy your food!
          </P>
          <div class="box-demanded-background">
            ${arrayProduct}
            <div class="box-demanded-order-total">
              <p class="box-demanded-order-total-text">
                Order Total
              </p>
              <span class="box-demanded-order-total-price-total">${Number(
                priceOrderTotal
              ).toFixed(2)}
              </span> 
            </div>
          </div> 
          <button type="button" class="btn-starter-new-order">
            Starter New Order
          </button>
        </div>
      </div>
    </div>
    `;

    const main = document.querySelector(".main");
    main.innerHTML += boxOrderConfirmed;
  }
});
