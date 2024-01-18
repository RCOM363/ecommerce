function shMenu() {
  document.querySelector(".mobileMenu").style.display = "flex";
}

function clMenu() {
  document.querySelector(".mobileMenu").style.display = "none";
}

var cart = [
  {
    productName: "Let’s Fight",
    anime: "Attack on Titan",
    img1: "https://comicsense.b-cdn.net/storage/2023/11/aot_tee_listing5_hitanshi-scaled.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2023/11/aot_tee_listing2_hitanshi-scaled.jpg",
    price: "₹1,199",
  },
  {
    productName: "Goku Kanji Orange Hoodie",
    anime: "Dargon Ball",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/goku_orange_hoodie_front_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/goku_orange_hoodie_back_comicsense.jpg",
    price: "₹1,299",
  },
  {
    productName: "Wanted Zoro",
    anime: "One Piece",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/Zoro-tee-v1-scaled.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/Zoro-tee-v3.jpg",
    price: "₹599",
  },
  {
    productName: "Game Of Deaths Hoodie",
    anime: "Death Note",
    img1: "https://comicsense.b-cdn.net/storage/2022/12/ezgif.com-gif-maker-3.webp",
    img2: "https://comicsense.b-cdn.net/storage/2022/12/deathnote_hoodie3.webp",
    price: "₹1,699",
  },
];

// Loader
window.addEventListener("load", () => {
  const lw = document.querySelector(".loaderWrapper");
  lw.classList.add("fade");
});

var cc = document.querySelector(".cardcont");

function dispCards() {
  var clutter = " ";
  for (let i in cart) {
    clutter += `<div class="card1">
        <div class="imgcont" style="--bg-image1:url('${cart[i].img1}');--bg-image2:url('${cart[i].img2}')">
        <div title="remove from cart" class="atcBtn"><i class="fa-solid">x</i></div>
        </div>
        <p><b>${cart[i].productName}</b></p>
        <p>${cart[i].price}</p>
        </div>`;
  }
  cc.innerHTML = clutter;
}

dispCards();
