const products = [
  {
    productName: "Survey Corps Hoodie",
    anime: "Attack on Titan",
    category: "Hoodie",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/survey_corps_aot_hood_front_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/survey_corps_aot_hood_back_comicsense.jpg",
    price: "₹1,499",
  },
  {
    productName: "Survey Corps Jacket",
    anime: "Attack on Titan",
    category: "Jacket",
    img1: "https://comicsense.b-cdn.net/storage/2021/10/aot_jacket_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/10/aot_jackete_comicsense.jpg",
    price: "₹1,200",
  },
  {
    productName: "Face Your Demon ",
    anime: "Jujutsu Kaisen",
    category: "T-shirt",
    img1: "https://comicsense.b-cdn.net/storage/2023/10/jjk_faceyourinnerdemon_tee_listing5_hitanshi-scaled.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2023/10/jjk_faceyourinnerdemon_tee_listing2_hitanshi-scaled.jpg",
    price: "₹949",
  },
  {
    productName: "Hero From Hell Hoodie",
    anime: "Chainsawman",
    category: "Hoodie",
    img1: "https://comicsense.b-cdn.net/storage/2022/12/chainsaw_front1_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2022/12/chainsaw_hoodie3-2_comicsense.jpg",
    price: "₹1,299",
  },
  {
    productName: "Warrior of Liberation",
    anime: "One Piece",
    category: "T-shirt",
    img1: "https://comicsense.b-cdn.net/storage/2023/09/joyboy-neon.webp",
    img2: "https://comicsense.b-cdn.net/storage/2023/09/joyboy-neon-2.webp",
    price: "₹999",
  },
  {
    productName: "Itadori Jujutsu Uniform",
    anime: "Jujutsu Kaisen",
    category: "Jacket",
    img1: "https://comicsense.b-cdn.net/storage/2021/09/itadori_cosplay_hoodief_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/09/itadori_cosplay_hoodiec_comicsense.jpg",
    price: "₹1,599",
  },
  {
    productName: "Gomu Gomu No Hoodie",
    anime: "One Piece",
    category: "Hoodie",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/onepiece_gomu_hood_front_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/onepiece_gomu_hood_back_comicsense.jpg",
    price: "₹1,499",
  },
  {
    productName: "Let’s Fight",
    anime: "Attack on Titan",
    category: "T-shirt",
    img1: "https://comicsense.b-cdn.net/storage/2023/11/aot_tee_listing5_hitanshi-scaled.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2023/11/aot_tee_listing2_hitanshi-scaled.jpg",
    price: "₹1,199",
  },
  {
    productName: "Goku Kanji Orange Hoodie",
    anime: "Dargon Ball",
    category: "Hoodie",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/goku_orange_hoodie_front_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/goku_orange_hoodie_back_comicsense.jpg",
    price: "₹1,299",
  },
  {
    productName: "Wanted Zoro",
    anime: "One Piece",
    category: "T-shirt",
    img1: "https://comicsense.b-cdn.net/storage/2021/03/Zoro-tee-v1-scaled.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2021/03/Zoro-tee-v3.jpg",
    price: "₹599",
  },
  {
    productName: "Game Of Deaths Hoodie",
    anime: "Death Note",
    category: "Hoodie",
    img1: "https://comicsense.b-cdn.net/storage/2022/12/ezgif.com-gif-maker-3.webp",
    img2: "https://comicsense.b-cdn.net/storage/2022/12/deathnote_hoodie3.webp",
    price: "₹1,699",
  },
  {
    productName: "U.A. High Cosplay Uniform",
    anime: "My Hero Academia",
    category: "Jacket",
    img1: "https://comicsense.b-cdn.net/storage/2022/10/mha_bomber1_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2022/10/mha_bomber54jpg_comicsense.jpg",
    price: "₹1,300",
  },
  {
    productName: "Sage Of Shadow Path",
    anime: "Naruto",
    category: "T-shirt",
    img1: "https://comicsense.b-cdn.net/storage/2023/03/naruto_sageofshadowpath_oversizetee_listing_hitanshi-2_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2023/03/naruto_sageofshadowpath_oversizetee_listing_hitanshi-4_comicsense.jpg",
    price: "₹949",
  },
  {
    productName: "Hashira – The Pillars Hoodie",
    anime: "Demon Slayer",
    category: "Hoodie",
    img1: "https://comicsense.b-cdn.net/storage/2022/01/backHashira-hoodie_comicsense.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2022/01/flatlay-1Hashira-hoodie_comicsense.jpg",
    price: "₹1,499",
  },
  {
    productName: "Six Eyes Club Tee",
    anime: "Jujutsu kaisen",
    category: "T-shirt",
    img1: "https://comicsense.b-cdn.net/storage/2023/11/strongest06_jjk_tee_listing7_hitanshi-scaled.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2023/11/strongest06_jjk_tee_listing6_hitanshi-scaled.jpg",
    price: "₹799",
  },
  {
    productName: "Nozarashi",
    anime: "Bleach",
    category: "T-shirt",
    img1: "https://comicsense.b-cdn.net/storage/2023/10/bleach_bankainozarashi_tee_listing5_hitanshi-scaled.jpg",
    img2: "https://comicsense.b-cdn.net/storage/2023/10/bleach_bankainozarashi_tee_listing1_hitanshi-scaled.jpg",
    price: "₹1,099",
  },
];

// NavBar
function shMenu() {
  document.querySelector(".mobileMenu").style.display = "flex";
}

function clMenu() {
  document.querySelector(".mobileMenu").style.display = "none";
}

//Loader
window.addEventListener("load", () => {
  const lw = document.querySelector(".loaderWrapper");
  lw.classList.add("fade");
});

// Display products
var cc = document.querySelector(".cardcont");

function dispCards(category) {
  var clutter = " ";
  cc.innerHTML = " ";

  for (let i in products) {
    if (category === "all" || products[i].category.toLowerCase() === category) {
      clutter += `<div class="card1">
  <div class="imgcont" style="--bg-image1:url('${products[i].img1}');--bg-image2:url('${products[i].img2}')">
  <div title="Add to Cart" class="atcBtn"><i class="fa-solid fa-bag-shopping"></i></div>
  </div>
  <span>${products[i].anime}</span>
  <p><b>${products[i].productName}</b></p>
  <p>${products[i].price}</p>
  
    </div>`;
    }
  }

  cc.innerHTML = clutter;
}

dispCards("all");

// Filter
document.querySelector(".fltrcont").addEventListener("click", (details) => {
  const fltr = details.target.textContent;
  if (fltr.length <= 7 && fltr != "filters") {
    dispCards(fltr);
    const fltrs = document.querySelectorAll(".fltr");
    fltrs.forEach((fltr) => {
      fltr.classList.remove("active");
    });

    details.target.classList.add("active");
  }
});

// Search
function srch() {
  const srchbar = document.getElementById("srchbar").value;
  console.log(srchbar);

  const cards = document.querySelectorAll(".card1");
  // console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    let aniname = cards[i].childNodes[3].innerText;
    let pname = cards[i].childNodes[5].innerText;
    if (
      aniname.toLowerCase().includes(srchbar.toLowerCase()) ||
      pname.toLowerCase().includes(srchbar.toLowerCase())
    ) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
