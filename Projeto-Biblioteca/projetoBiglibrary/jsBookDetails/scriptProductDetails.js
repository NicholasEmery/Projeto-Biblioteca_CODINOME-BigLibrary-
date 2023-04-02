const allHoverImages = document.querySelectorAll(".hover-container div img");
const imgContainer = document.querySelector(".img-container");

window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});

allHoverImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    imgContainer.querySelector("img").src = image.src;
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});

function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}

//--- Campo de pesquisa Mobile ---\\
searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

//--- Box Login ---\\
let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }

  // fadeOut();
};

const description = document.querySelector("#product-description");
const btnLMais = document.querySelector(".btnLMais");
const btnLMenos = document.querySelector(".btnLMenos");

btnLMais.addEventListener("click", () => {
  description.style.height = "auto";
  btnLMais.style = "display: none;";
  btnLMenos.style.display = "block";
});

btnLMenos.addEventListener("click", () => {
  description.style.height = "96px";
  btnLMenos.style.display = "none";
  btnLMais.style = "display: block;";
});

const btnBuy = document.querySelector(".buy-now-btn");
const divForm = document.querySelector(".form-background");

btnBuy.addEventListener("click", () => {
  divForm.classList.add("active");
});

const btnClose = document.querySelector(".close-form");

btnClose.addEventListener("click", () => {
  divForm.classList.remove("active");
});

const imgFrente = document.querySelector("#imgFrente");

imgFrente.addEventListener("focus", () => {
  imgFrente.style.transform = "scale(2)";
  imgFrente.style.cursor = "zoom-out";
});

imgFrente.addEventListener("blur", () => {
  imgFrente.style.transform = "scale(1)";
  imgFrente.style.cursor = "zoom-in";
});


const imgContainerOpen = document.querySelector("#imgContainer");
const divBgImg = document.querySelector(".background-img");

imgContainerOpen.addEventListener("mouseMove", () => {
  divBgImg.classList.add("active");
});

const btnCloseImg = document.querySelector(".close-bgImg");

btnCloseImg.addEventListener("click", () => {
  divBgImg.classList.remove("active");
});