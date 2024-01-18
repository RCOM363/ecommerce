const products = [
  {
    productName: "Survey Corps Hoodie",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/survey_corps_aot_hood_front_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/survey_corps_aot_hood_back_comicsense.jpg",
    price: "₹1,499",
  },
  {
    productName: "Survey Corps Jacket",
    anime: "Attack on Titan",
    img1: "https://comicsense.b-cdn.net/storage/2021/10/aot_jacket_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/10/aot_jackete_comicsense.jpg",
    price: "₹1,200",
  },
  {
    productName: "Hero From Hell Hoodie",
    anime: "Chainsawman",
    img1: "https://comicsense.b-cdn.net/storage/2022/12/chainsaw_front1_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2022/12/chainsaw_hoodie3-2_comicsense.jpg",
    price: "₹1,299",
  },
  {
    productName: "Itadori Jujutsu Uniform",
    anime: "Jujutsu Kaisen",
    img1: "https://comicsense.b-cdn.net/storage/2021/09/itadori_cosplay_hoodief_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/09/itadori_cosplay_hoodiec_comicsense.jpg",
    price: "₹1,599",
  },
  {
    productName: "Gomu Gomu No Hoodie",
    anime: "One Piece",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/onepiece_gomu_hood_front_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/onepiece_gomu_hood_back_comicsense.jpg",
    price: "₹1,499",
  },
];

// NavBar
function shMenu() {
  document.querySelector(".mobileMenu").style.display = "flex";
}

function clMenu() {
  document.querySelector(".mobileMenu").style.display = "none";
}

function shProducts() {
  open("./products.html", "_parent");
}

// Loader
window.addEventListener("load", () => {
  const lw = document.querySelector(".loaderWrapper");
  lw.classList.add("fade");
});

var cc = document.querySelector(".cardcont");

function dispCards() {
  var clutter = " ";
  for (let i in products) {
    clutter += `<div class="card1">
        <div class="imgcont" style="--bg-image1:url('${products[i].img1}');--bg-image2:url('${products[i].img2}')">
        <div title="Add to Cart" class="atcBtn"><i class="fa-solid fa-bag-shopping"></i></div>
        </div>
        <p>${products[i].productName}</p>
        <p><b>${products[i].price}</b></p>
        </div>`;
  }
  cc.innerHTML = clutter;
}

dispCards();

// Slider
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};
