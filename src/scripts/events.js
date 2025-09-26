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

    arrayBtnAddCart[index].remove();

    emptyCakeImg.style.display = "none";
    emptyTextcart.style.display = "none";

    containerOrder.innerHTML += `
    <div class="box-cart-order">
        <div class="box-order">
            <div class="box-order-info">
                <h3 class="title-order">${arrayNameProduct[index].textContent}</h3>
                <div class="box-price-order">
                    <div class="number-order">1x</div>
                    <div class="price-order">@ ${arrayPriceProduct[index].textContent}</div>
                    <div class="calculation-order" id="${index}">${arrayPriceProduct[index].textContent}</div>
                </div>
            </div>
            <img class="icon-box-order" src="../assets/icons/icon-remove-item.svg" alt="Icon to remove order from cart"/> 
        </div>
    </div>
`;

    const containerfixedCart = `
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
      containerOrder.insertAdjacentHTML("afterend", containerfixedCart);
    }
  });
});

// Ao clicar no botão de + ou - aumenta ou diminui o número no menu e calcular o preço com base na quantidade de itens adicionados no carrinho

let quantityNumberMany = 1;

arrayProductList.forEach((elementProductList, index) => {
  elementProductList.addEventListener("click", (e) => {
    const iconIncrement = e.target.matches(".inc-btn");
    const iconDecrement = e.target.matches(".dec-btn");
    const productNumberMany = elementProductList.querySelector(".number");
    const calculationOrder = document.getElementById(`${index}`);
    const orderTotal = document.querySelector(".total-box-order-total");

    orderTotal.textContent = `$${priceOrderTotal.toFixed(2)}`;
    if (iconIncrement) {
      quantityNumberMany = productNumberMany.textContent;
      quantityNumberMany++;
      numberIncDec(elementProductList, quantityNumberMany);
      const calcMult = priceProducMult(quantityNumberMany, index, dataFood);

      calculationOrder.textContent = `$${calcMult.toFixed(2)}`;

      priceOrderTotal = priceOrderTotal + dataFood[index].price;
      orderTotal.textContent = `$${priceOrderTotal.toFixed(2)}`;
      console.log(priceOrderTotal);
    }
    if (iconDecrement) {
      quantityNumberMany = productNumberMany.textContent;
      if (quantityNumberMany !== "1") {
        quantityNumberMany--;
        numberIncDec(elementProductList, quantityNumberMany);
        const calcMult = priceProducMult(quantityNumberMany, index, dataFood);

        calculationOrder.textContent = `$${calcMult.toFixed(2)}`;

        priceOrderTotal -= dataFood[index].price;
        orderTotal.textContent = `$${priceOrderTotal.toFixed(2)}`;
        console.log(priceOrderTotal);
      }
    }
  });
});

// let arrayCartItensIndex = [];

// arrayProductList.forEach((elementProduct, elementIndex) => {
//   elementProduct.addEventListener("click", (e) => {
//     const arrayContains = arrayCartItensIndex.filter((number) => {
//       return number === elementIndex;
//     });

//     if (arrayContains.length === 0) {
//       arrayCartItensIndex.push(elementIndex);
//     }
//   });
// });
const boxCart = document.getElementById("box-cart");
boxCart.addEventListener("click", (e) => {
  const btnConfirm = e.target.closest(".btn-confirm");

  if (btnConfirm) {
    const boxOrderConfirmed = `
    <div class="box-order-confirmed-opacity-absolute">
      <div class="box-order-confirmed-opacity">
        <div class="box-order-confirmed">
          <img src="../../assets/icons/icon-order-confirmed.svg" class="box-order-confirmed-icon" />
          <h2 class="box-order-confirmed-title">
            Order Confirmed
          </h2>
          <p class="box-order-confirmed-text">
            We hope you enjoy your food!
          </P>
          <div class="box-demanded-background">
            <div class="box-demanded-order-total">
              <p class="box-demanded-order-total-text">
                Order Total
              </p>
              <span class="box-demanded-order-total-price-total">
              </span> 
            </div>
          </div> 
        </div>
      </div>
    </div>
    `;
  }
});
