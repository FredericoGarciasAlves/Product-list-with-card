document.addEventListener("DOMContentLoaded", function () {
  // const btnAddcart = document.querySelectorAll(".btn-add-cart");
  const afterDiv = document.querySelectorAll(".after-div");
  const boxCart = document.getElementById("box-cart");
  // const emptyCakeImg = document.getElementById("empty-cake-img");
  // const emptyTextcart = document.getElementById("empty-text-cart");
  const nameProduct = document.querySelectorAll(".name-product");
  const priceProduct = document.querySelectorAll(".price-product");
  const yourCart = document.querySelector(".title-cart");

  // const arrayBtnAddCart = Array.from(btnAddcart);
  // const arrayAfterDiv = Array.from(afterDiv);
  const arrayNameProduct = Array.from(nameProduct);
  const arrayPriceProduct = Array.from(priceProduct);

  arrayBtnAddCart.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      arrayBtnAdd.push(index);
      const box = document.createElement("div");
      const btnIncrement = document.createElement("button");
      const numberDisplay = document.createElement("div");
      const btnDecrement = document.createElement("button");
      const iconIncrement = document.createElement("img");
      const iconDecrement = document.createElement("img");

      box.setAttribute("class", "inc-dec-box");
      btnIncrement.setAttribute("class", "inc-btn");
      numberDisplay.setAttribute("class", "number");
      btnDecrement.setAttribute("class", "dec-btn");

      iconIncrement.src = "../assets/icons/icon-increment-quantity.svg";
      iconIncrement.alt = "Icon increase cart quantity";
      iconDecrement.src = "../assets/icons/icon-decrement-quantity.svg";
      iconDecrement.alt = "Icon decrease cart quantity";

      btnIncrement.appendChild(iconIncrement);
      btnDecrement.appendChild(iconDecrement);
      box.appendChild(btnDecrement);
      box.appendChild(numberDisplay);
      box.appendChild(btnIncrement);

      numberDisplay.textContent = "1";

      arrayAfterDiv[index].insertAdjacentElement("afterend", box);
      arrayBtnAddCart[index].remove();

      emptyCakeImg.style.display = "none";
      emptyTextcart.style.display = "none";

      const boxCartOrder = document.createElement("div");
      const boxOrder = document.createElement("div");
      const boxOrderInfo = document.createElement("div");
      const titleNameOrder = document.createElement("h3");
      const boxPriceOrder = document.createElement("div");
      const numberOrder = document.createElement("div");
      const priceOrder = document.createElement("div");
      const calculationOrder = document.createElement("div");
      const iconBoxOrder = document.createElement("img");
      const boxOrderTotal = document.createElement("div");
      const textOrderTotal = document.createElement("p");
      const totalBoxOrderTotal = document.createElement("div");
      const boxCarbonNeutal = document.createElement("div");
      const iconBoxCarbonNeutral = document.createElement("img");
      const textBoxCarbonNeutral = document.createElement("p");
      const spanBoxCarbonNeutral = document.createElement("span");
      const boxBtnConfirm = document.createElement("div");
      const btnConfirm = document.createElement("button");

      iconBoxOrder.src = "./assets/icons/icon-remove-item.svg";
      iconBoxOrder.alt = "icon to remove order from cart";
      iconBoxCarbonNeutral.src = "./assets/icons/icon-carbon-neutral.svg";
      iconBoxCarbonNeutral.alt = "Icon of a tree";

      boxCartOrder.setAttribute("class", "box-cart-order");
      boxOrder.setAttribute("class", "box-order");
      boxOrderInfo.setAttribute("class", "box-order-info");
      titleNameOrder.setAttribute("class", "title-order");
      boxPriceOrder.setAttribute("class", "box-price-order");
      numberOrder.setAttribute("class", "number-order");
      priceOrder.setAttribute("class", "price-order");
      calculationOrder.setAttribute("class", "calculation-order");
      iconBoxOrder.setAttribute("class", "icon-box-order");
      boxOrderTotal.setAttribute("class", "box-order-total");
      textOrderTotal.setAttribute("class", "text-order-total");
      totalBoxOrderTotal.setAttribute("class", "total-box-order-total");
      boxCarbonNeutal.setAttribute("class", "box-carbon-neutral");
      iconBoxCarbonNeutral.setAttribute("class", "icon-box-carbon-neutral");
      textBoxCarbonNeutral.setAttribute("class", "text-box-carbon-neutral");
      spanBoxCarbonNeutral.setAttribute("class", "span-box-carbon-neutral");
      boxBtnConfirm.setAttribute("class", "box-btn-confirm");
      btnConfirm.setAttribute("class", "btn-confirm");
      btnConfirm.setAttribute("type", "button");

      boxCartOrder.appendChild(boxOrder);
      boxOrder.appendChild(boxOrderInfo);
      boxOrder.appendChild(iconBoxOrder);
      boxOrderInfo.appendChild(titleNameOrder);
      boxOrderInfo.appendChild(boxPriceOrder);
      boxPriceOrder.appendChild(numberOrder);
      boxPriceOrder.appendChild(priceOrder);
      boxPriceOrder.appendChild(calculationOrder);
      boxOrderTotal.appendChild(textOrderTotal);
      boxOrderTotal.appendChild(totalBoxOrderTotal);
      boxCarbonNeutal.appendChild(iconBoxCarbonNeutral);
      boxCarbonNeutal.appendChild(textBoxCarbonNeutral);
      boxBtnConfirm.appendChild(btnConfirm);

      textBoxCarbonNeutral.textContent = "This is a ";
      textBoxCarbonNeutral.appendChild(spanBoxCarbonNeutral);

      textBoxCarbonNeutral.appendChild(document.createTextNode(" delivery"));

      spanBoxCarbonNeutral.textContent = "carbon-neutral";
      numberOrder.textContent = "1x";
      titleNameOrder.textContent = arrayNameProduct[index].textContent;
      priceOrder.textContent = `@ ${arrayPriceProduct[index].textContent}`;
      textOrderTotal.textContent = "Order total";
      btnConfirm.textContent = "Confirm Order";

      // Conjunto de função para os calculos de adicionar em remover do carrinho
      let priceValue = parseFloat(
        arrayPriceProduct[index].textContent.replace("$", "")
      );

      function updateNumberDisplay() {
        numberDisplay.textContent = parseInt(numberDisplay.textContent) + 1;
      }

      function updateNumberOrder() {
        numberOrder.textContent = `${parseInt(numberOrder.textContent) + 1}x`;
      }

      function updateCalculationOrderMulti() {
        const total = parseInt(numberDisplay.textContent) * priceValue;
        calculationOrder.textContent = `$${total.toFixed(2)}`;
        return total;
      }

      function updateTotalBoxOrderTotalMulti() {
        setTimeout(() => {
          const totalCalculationOrder =
            document.querySelectorAll(".calculation-order");
          let arrayTotalCalculationOrder = Array.from(
            totalCalculationOrder
          ).map((div) => {
            let texto = div.textContent.trim();
            return parseFloat(texto.replace("$", ""));
          });

          const somaArrayTotalCalculationOrder =
            arrayTotalCalculationOrder.reduce(
              (acumulador, valorAtual) => acumulador + valorAtual,
              0
            );
          totalBoxOrderTotal.textContent = `$${somaArrayTotalCalculationOrder.toFixed(
            2
          )}`;
        }, 0.01);
      }

      const observer = new MutationObserver(() => {
        updateTotalBoxOrderTotalMulti();
      });

      // Observa mudanças no conteúdo de cada div .calculation-order
      document.querySelectorAll(".calculation-order").forEach((div) => {
        observer.observe(div, {
          childList: true,
          characterData: true,
          subtree: true,
        });
      });

      function decrementCalculationOrderDivision() {
        const result = priceValue * parseInt(numberOrder.textContent);
        calculationOrder.textContent = `$${result.toFixed(2)}`;
      }

      function decrementNumberDisplayMinus() {
        if (parseInt(numberDisplay.textContent) > 1) {
          numberDisplay.textContent = parseInt(numberDisplay.textContent) - 1;
        }
      }

      function decrementNumberOrderMinus() {
        if (parseInt(numberOrder.textContent) > 1) {
          numberOrder.textContent = `${parseInt(numberOrder.textContent) - 1}x`;
        }
      }

      function decrementTotalBoxOrderTotal() {
        let arrayPriceProduct = Array.from(priceProduct).map((div) => {
          let texto = div.textContent.trim();
          return parseFloat(texto.replace("$", ""));
        });

        let intTotalBoxOrderTotal = parseFloat(
          totalBoxOrderTotal.textContent.replace("$", "")
        );

        if (parseInt(numberDisplay.textContent) > 1) {
          const subtractionArrayTotalCalculationOrder =
            intTotalBoxOrderTotal - arrayPriceProduct[index];
          const updatedValue = Math.max(
            subtractionArrayTotalCalculationOrder,
            0
          );
          totalBoxOrderTotal.textContent = `$${updatedValue.toFixed(2)}`;
        }
      }

      function decrementIconClick() {
        setTimeout(() => {
          const calculationOrder =
            document.querySelectorAll(".calculation-order");
          let arrayTotalCalculationOrder = Array.from(calculationOrder).map(
            (div) => {
              let texto = div.textContent.trim();
              return parseFloat(texto.replace("$", ""));
            }
          );

          let total = 0;
          arrayTotalCalculationOrder.forEach((numberTotal) => {
            total += numberTotal;
          });

          totalBoxOrderTotal.innerText = `$${total.toFixed(2)}`;
        }, 0);
      }

      function removeItens() {
        setTimeout(() => {
          const boxCartOrderQ = document.querySelectorAll(".box-cart-order");
          let arrayBoxCartOrder = Array.from(boxCartOrderQ);
          const boxCarbonNeutalC = document.querySelector(
            ".box-carbon-neutral"
          );
          const boxOrderTotalC = document.querySelector(".box-order-total");
          const btnConfirmC = document.querySelector(".btn-confirm");
          if (arrayBoxCartOrder.length === 0) {
            boxCarbonNeutalC.remove();
            boxOrderTotalC.remove();
            btnConfirmC.remove();
            emptyCakeImg.style.display = "block";
            emptyTextcart.style.display = "block";
          }
        }, 10);
      }

      btnDecrement.addEventListener("click", () => {
        decrementNumberDisplayMinus();
        decrementNumberOrderMinus();
        decrementTotalBoxOrderTotal();
        decrementCalculationOrderDivision();
      });
      btnIncrement.addEventListener("click", () => {
        updateNumberDisplay();
        updateNumberOrder();
        updateCalculationOrderMulti();
        updateTotalBoxOrderTotalMulti();
      });

      updateCalculationOrderMulti();
      updateTotalBoxOrderTotalMulti();

      // Inteligencia para não aparecer mais de um icone da box total, neutral e btn confirm
      const nodeBoxOrderTotal = document.querySelectorAll(".box-order-total");
      const nodeBoxCarbonNeutral = document.querySelectorAll(
        ".box-carbon-neutral"
      );
      const nodeBtnConfirm = document.querySelectorAll(".btn-confirm");
      let arrayBoxOrderTotal = Array.from(nodeBoxOrderTotal);
      let arrayBoxCarbonNeutral = Array.from(nodeBoxCarbonNeutral);
      let arrayBtnConfrim = Array.from(nodeBtnConfirm);
      arrayBoxOrderTotal.forEach((rem, index) => {
        arrayBoxOrderTotal[index].remove();
        arrayBoxCarbonNeutral[index].remove();
        arrayBtnConfrim[index].remove();
      });

      // Evento para o botão de remover do carrinho
      setTimeout(() => {
        const iconBoxOrderC = document.querySelectorAll(".icon-box-order");
        iconBoxOrderC.forEach((element) => {
          element.addEventListener("click", () => {
            boxCartOrder.remove();
            box.remove();
            arrayAfterDiv[index].insertAdjacentElement(
              "afterend",
              arrayBtnAddCart[index]
            );
            removeItens();
            decrementIconClick();
          });
        });
      });
      // inteligencia para remover a box total, neutral, btn confirm quando estiver sem produtos no cart

      // adicionar os elementos na cart
      boxCart.appendChild(boxCartOrder);
      boxCartOrder.insertAdjacentElement("afterend", boxOrderTotal);
      boxOrderTotal.insertAdjacentElement("afterend", boxCarbonNeutal);
      boxCarbonNeutal.insertAdjacentElement("afterend", boxBtnConfirm);
      setTimeout(() => {
        const calculationOrder =
          document.querySelectorAll(".calculation-order");
        let arrayTotalCalculationOrder = Array.from(calculationOrder);
        const arrayPorcentagemTabletMain = [
          154.6, 164.6, 174, 183, 192, 201, 210, 220, 229,
        ];
        const arrayPorcentagemMobileMain = [
          361, 371, 380, 389, 389, 408, 417, 426, 436,
        ];
        const main = document.querySelector(".main");
        const mediaQueryeTabletp = window.matchMedia("(max-width: 768px)");
        const mediaQueryeMobilep = window.matchMedia("(max-width: 375px)");

        for (let i = -1; arrayTotalCalculationOrder.length > i; i++) {
          if (mediaQueryeTabletp.matches) {
            main.style.height = `${arrayPorcentagemTabletMain[i]}rem`;
          }
          if (mediaQueryeMobilep.matches) {
            main.style.height = `${arrayPorcentagemMobileMain[i]}rem`;
          }
          yourCart.textContent = `Your Cart(${i + 1})`;
        }
      }, 10);

      btnConfirm.addEventListener("click", () => {
        //tags box order confirmed

        const boxOrderConfirmedOpacityAbsolute = document.createElement("div");
        const boxOrderConfirmedOpacity = document.createElement("div");
        const boxOrderConfirmed = document.createElement("div");
        const boxOrderConfirmedIcon = document.createElement("img");
        const boxOrderConfirmedTitle = document.createElement("h2");
        const boxOrderConfirmedText = document.createElement("p");
        const boxDemandedBackground = document.createElement("div");
        const boxDemandedOrderTotal = document.createElement("div");
        const boxDemandedOrderTotalText = document.createElement("p");
        const boxDemandedOrderTotalPriceTotal = document.createElement("div");
        const btnStarterNewOrder = document.createElement("button");

        //organizando as classes

        boxOrderConfirmedOpacityAbsolute.setAttribute(
          "class",
          "box-order-confirmed-opacity-absolute"
        );
        boxOrderConfirmedOpacity.setAttribute(
          "class",
          "box-order-confirmed-opacity"
        );
        boxOrderConfirmed.setAttribute("class", "box-order-confirmed");
        boxOrderConfirmedIcon.setAttribute("class", "box-order-confirmed-icon");
        boxOrderConfirmedTitle.setAttribute(
          "class",
          "box-order-confirmed-title"
        );
        boxOrderConfirmedText.setAttribute("class", "box-order-confirmed-text");
        boxDemandedBackground.setAttribute("class", "box-demanded-background");
        boxDemandedOrderTotal.setAttribute("class", "box-demanded-order-total");
        boxDemandedOrderTotalText.setAttribute(
          "class",
          "box-demanded-order-total-text"
        );
        boxDemandedOrderTotalPriceTotal.setAttribute(
          "class",
          "box-demanded-order-total-price-total"
        );
        btnStarterNewOrder.setAttribute("class", "btn-starter-new-order");

        // metendo os conteudos dentro das tags
        boxOrderConfirmedIcon.src = "assets/icons/icon-order-confirmed.svg";
        boxOrderConfirmedTitle.textContent = "Order Confirmed";
        boxOrderConfirmedText.textContent = "We hope you enjoy your food!";
        boxDemandedOrderTotalText.textContent = "Order Total";
        const totalCalculationOrder =
          document.querySelectorAll(".calculation-order");
        let arrayTotalCalculationOrder = Array.from(totalCalculationOrder).map(
          (div) => {
            let texto = div.textContent.trim();
            return parseFloat(texto.replace("$", ""));
          }
        );

        const somaArrayTotalCalculationOrder =
          arrayTotalCalculationOrder.reduce(
            (acumulador, valorAtual) => acumulador + valorAtual,
            0
          );
        boxDemandedOrderTotalPriceTotal.textContent = `$${somaArrayTotalCalculationOrder.toFixed(
          2
        )}`;
        btnStarterNewOrder.textContent = "Starter New Order";

        // hierarquia das tags
        const cart = document.getElementById("cart");
        cart.insertAdjacentElement(
          "afterend",
          boxOrderConfirmedOpacityAbsolute
        );
        boxOrderConfirmedOpacityAbsolute.appendChild(boxOrderConfirmedOpacity);
        boxOrderConfirmedOpacity.appendChild(boxOrderConfirmed);
        boxOrderConfirmed.appendChild(boxOrderConfirmedIcon);
        boxOrderConfirmed.appendChild(boxOrderConfirmedTitle);
        boxOrderConfirmed.appendChild(boxOrderConfirmedText);
        boxOrderConfirmed.appendChild(boxDemandedBackground);

        boxOrderConfirmed.appendChild(btnStarterNewOrder);
        boxDemandedOrderTotal.appendChild(boxDemandedOrderTotalText);
        boxDemandedOrderTotal.appendChild(boxDemandedOrderTotalPriceTotal);

        boxOrderConfirmedOpacity.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        const titleOrder = document.querySelectorAll(".title-order");
        let arrayTitleOrder = Array.from(titleOrder).map(
          (element) => element.textContent
        );
        const numberOrder = document.querySelectorAll(".number-order");
        let arrayNumberOrder = Array.from(numberOrder).map(
          (element) => element.textContent
        );
        const priceOrder = document.querySelectorAll(".price-order");
        let arrayPriceOrder = Array.from(priceOrder).map(
          (element) => element.textContent
        );
        const calculationOrder =
          document.querySelectorAll(".calculation-order");
        let arrayCalculationOrder = Array.from(calculationOrder).map(
          (element) => element.textContent
        );

        const arrayPorcentagemBackgroundAbsoluteTablet = [
          155, 165, 174, 183, 192, 201, 210, 220, 229,
        ];

        const arrayPorcentagemBackgroundAbsoluteMobile = [
          360, 369, 379, 389, 397, 407, 416, 424, 434,
        ];
        for (let i = 0; arrayTitleOrder.length > i; i++) {
          const box = document.createElement("div");
          const boxDemanded = document.createElement("div");
          const boxDemandedImg = document.createElement("img");
          const boxDemandedNameProduct = document.createElement("p");
          const boxDemandedQuaPri = document.createElement("div");
          const boxDemandedQuantity = document.createElement("div");
          const boxDemandedPrice = document.createElement("div");
          const boxDemandedPriceTotal = document.createElement("div");

          // orgazinado as classes
          box.setAttribute("class", "box");
          boxDemanded.setAttribute("class", "box-demanded");
          boxDemandedImg.setAttribute("class", "box-demanded-img");
          boxDemandedNameProduct.setAttribute(
            "class",
            "box-demanded-name-product"
          );
          boxDemandedQuaPri.setAttribute("class", "box-demanded-qua-price");
          boxDemandedQuantity.setAttribute("class", "box-demanded-quantity");
          boxDemandedPrice.setAttribute("class", "box-demanded-price");
          boxDemandedPriceTotal.setAttribute(
            "class",
            "box-demanded-price-total"
          );

          boxDemandedImg.src = `assets/images/${arrayBtnAdd[i]}.jpg`;
          boxDemandedNameProduct.textContent = arrayTitleOrder[i];
          boxDemandedQuantity.textContent = arrayNumberOrder[i];
          boxDemandedPrice.textContent = arrayPriceOrder[i];
          boxDemandedPriceTotal.textContent = arrayCalculationOrder[i];

          const mediaQueryeTablet = window.matchMedia("(max-width: 768px)");
          const mediaQueryeMobile = window.matchMedia("(max-width: 375px)");
          if (mediaQueryeTablet.matches) {
            console.log(i);
            boxOrderConfirmedOpacity.style.height = `${arrayPorcentagemBackgroundAbsoluteTablet[i]}rem`;
          }
          if (mediaQueryeMobile.matches) {
            boxOrderConfirmedOpacity.style.height = `${arrayPorcentagemBackgroundAbsoluteMobile[i]}rem`;
          }

          boxDemandedBackground.appendChild(box);
          box.appendChild(boxDemanded);
          box.appendChild(boxDemandedPriceTotal);
          boxDemanded.appendChild(boxDemandedImg);
          boxDemanded.appendChild(boxDemandedNameProduct);
          boxDemanded.appendChild(boxDemandedQuaPri);
          boxDemandedQuaPri.appendChild(boxDemandedQuantity);
          boxDemandedQuaPri.appendChild(boxDemandedPrice);
        }

        boxDemandedBackground.appendChild(boxDemandedOrderTotal);

        btnStarterNewOrder.addEventListener("click", () => {
          location.reload();
        });
      });
    });
  });
});
