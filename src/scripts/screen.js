const btnAddcart = document.querySelectorAll(".btn-add-cart");
const afterDiv = document.querySelectorAll(".after-div");
const emptyCakeImg = document.getElementById("empty-cake-img");
const emptyTextcart = document.getElementById("empty-text-cart");
const nameProduct = document.querySelectorAll(".name-product");
const priceProduct = document.querySelectorAll(".price-product");
const containerOrder = document.getElementById("container-order");

const arrayPriceProduct = Array.from(priceProduct);
const arrayNameProduct = Array.from(nameProduct);
const arrayBtnAddCart = Array.from(btnAddcart);
const arrayAfterDiv = Array.from(afterDiv);

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
                    <div class="calculation-order"></div>
                </div>
            </div>
            <img class="icon-box-order" src="../assets/icons/icon-remove-item.svg" alt="Icon to remove order from cart"/> 
        </div>
    </div>
`;

    const containerfixedCart = `
    <div class="box-order-total">
        <p class="text-order-total">Order total</p>
        <div class="total-box-order-total"></div>
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
