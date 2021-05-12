import { productList } from "../ProductApi.js";
class Cards {
  items = document.querySelector("#pizzas .pizzaItems");
  cards = productList.getProductList();

  returnList() {
    return this.cards;
  }

  returnCards() {
    this.returnList().then((arr) => {
      arr.forEach((item, index) => {
        this.items.innerHTML += `
                <div class="col-md-3 mt-5">
                <div class="card" style="width: 18rem;">
                  <img src="../assets/imgs/products/pizza-${index+1}.png" class="card-img-top" alt="pizza-1">
                  <div class="card-body">
                  <div class="card-title d-flex justify-content-between">
                    <h5>${item.name}</h5>
                    <span>32cm</span>
                  </div>
                    <p class="card-text">${item.topping? item.topping : "Resept tapilmadi"}</p>
                    <div class="card-span">
                      ${item.price}$
                    </div>
                    <div class="button">
                      <button>
                        <i class="fas fa-shopping-bag"></i>
                      </button>
                    </div>
                  </div>
  
                  <div class="sizes">
                    <strong style="font-size: 25px; display: inline-block; margin-bottom: 30px;">Sizes: </strong>
                    <form>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                          small - 20cm
                        </label>
                      </div>
                      <div class="form-check my-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                          medium - 25cm
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                          big - 32cm
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary w-100" style="background-color: #FE3326; margin-top: 30px; border: none;">Add to basket</button>
                    </form>
                  </div>
                </div>
                
              </div>
                `;
      });
    });
  }
}

// export default Cards;

export const pizzas = new Cards();
