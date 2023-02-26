// ******************************************************

// OfferSlider

let slideIndex = 0;
topOfferSlide();

function topOfferSlide() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(topOfferSlide, 2000); // Change image every 2 seconds
}


let url = "https://63f6414b59c944921f708a51.mockapi.io/login/"
let username = document.getElementById("username")
let profile = document.getElementById("profile")
profile.addEventListener("mouseenter", async (e) => {
  try {
    let req = await fetch(url)
    let res = await req.json()
    username.innerText = res[res.length - 1].name
  } catch (error) {
    console.log(error)
  }
})
profile.addEventListener("mouseout", (e) => {
  username.innerHTML = ""
})

// ******************************************************

// SlideImage

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width/2;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// ******************************************************

