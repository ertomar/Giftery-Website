let priceSlider = document.getElementById("slider");
let lowerValue = document.getElementById("lower-value");
let upperValue = document.getElementById("upper-value");

noUiSlider.create(priceSlider, {
  start: [500, 4000],
  connect: [false, true, false],
  range: {
    min: [0],
    "10%": [500, 500],
    "50%": [4000, 1000],
    max: [10000]
  }
});
slider.noUiSlider.on("update", function() {
  lowerValue.innerHTML = slider.noUiSlider.get()[0];
  upperValue.innerHTML = slider.noUiSlider.get()[1];
});

$(document).ready(function() {
  $("select").niceSelect();
});

let products = [
  {
    name: "Quartz Belt Watch",
    category: "Accessories",
    price: 150,
    imagePath: "images/product1.png"
  },
  {
    name: "Quartz Belt Watch",
    category: "Accessories",
    price: 150,
    imagePath: "images/product1.png"
  },
  {
    name: "Quartz Belt Watch",
    category: "Accessories",
    price: 150,
    imagePath: "images/product1.png"
  }
];
let productsHTML = "";
for (let i = 0; i < products.length; i++) {
  productsHTML += `<div class="col-md-6 col-lg-4">
  <div class="o-product mb-4">
  <div
  class="index__preview"
  style="background-image: url(${products[i].imagePath});"
  ></div>
  <div
  class="index__preview"
  style="background-image: url(${products[i].imagePath});"
  ></div>
  <div
  class="index__preview"
  style="background-image: url(${products[i].imagePath});"
  ></div>
    <div class="product-image">
      <img class="img-fluid w-100" src=${products[i].imagePath} />
      <div class="o-overlay-icons text-center">
        <ul
          class="list-unstyled d-flex flex-row justify-content-center"
        >
          <li>
            <button><i class="fas fa-search"></i></button>
          </li>
          <li>
            <button>
              <i class="fas fa-shopping-cart"></i>
            </button>
          </li>
          <li>
            <button><i class="far fa-heart"></i></button>
          </li>
        </ul>
      </div>
    </div>
    <div class="o-product-info text-center text-muted p-4">
      <p class="o-category-name m-0">${products[i].category}</p>
      <h4 class="o-product-name">
        <a href="#">${products[i].name}</a>
      </h4>
      <p class="o-product-price font-weight-bold">$${products[i].price}.00</p>
    </div>
  </div>
</div>`;
}

$(".o-categories .o-products-area .row").html(productsHTML);
