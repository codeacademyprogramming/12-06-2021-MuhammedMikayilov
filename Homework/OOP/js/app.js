import { pizzas } from "./Cards/cards.js";
import { storage } from "./Storage/index.js";
class App {
  products() {
    this.showBasket = document.querySelector(".basket-icon");
    this.basket = document.querySelector("#basket");

    this.showBasket.addEventListener("click", () => {
      pizzas.returnArrayForBasket().forEach((item) => {
        console.log("item", item);
      });
      JSON.parse(storage.getItem("PRODUCT"));
      console.log(JSON.parse(storage.getItem("PRODUCT")), "local");
      this.hiddenVisibility = this.basket.getAttribute("style");
      if (this.hiddenVisibility.includes("hidden")) {
        this.basket.setAttribute(
          "style",
          "visibility: visible; opacity: 1; transition: all .5s"
        );
      } else {
        this.basket.setAttribute(
          "style",
          "visibility: hidden; opacity: 0; transition: all .5s"
        );
      }
    });

    JSON.parse(storage.getItem("PRODUCT")).forEach((item, indx) => {
      this.basket.innerHTML += `
            <div class="row basket-row">
                <div class="col-md-3">
                <img src="../assets/imgs/pizza-small.png" alt="">
                </div>
                <div class="col-md-1">
                <span class="count">x1</span>
                </div>
                <div class="col-md-8">
                <div class="content-basket d-flex justify-content-between">
                    <div class="info">
                    <h5>${item.name}</h5>
                    <strong>size: small</strong>
                    </div>
                    <strong class="price">${item.price}$</strong>
                </div>
                </div>
        </div>
         `;
    });

    this.basket.innerHTML += `
    <div class="row mt-5">
    <div class="col-12">
    <div class="total d-flex justify-content-between"><h2>Total:</h2> <strong>${JSON.parse(storage.getItem("PRODUCT"))
    .reduce((calc, arr)=>calc+=arr.price, 0)}$</strong></div>
    </div>
</div>
    `
    pizzas.returnCards();
  }
}
let app = new App();
app.products();
