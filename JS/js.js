// Swiper instances
let swiperMiddle, swiperAsia, swiperAfrica, swiperEurop;

// Function to initialize Swiper for Africa
function initializeSwiperAfrica() {
  if (swiperAfrica) {
    swiperAfrica.destroy();
    swiperAfrica = null;
  }
  swiperAfrica = new Swiper(".swiperAfrica", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    breakpoints: {
      500: { slidesPerView: 3, spaceBetween: 10 }
    }
  });
}

// Function to initialize Swiper for Europe
function initializeSwiperEurope() {
  if (swiperEurop) {
    swiperEurop.destroy();
    swiperEurop = null;
  }
  swiperEurop = new Swiper(".swiperEurop", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    breakpoints: {
      500: { slidesPerView: 3, spaceBetween: 10 }
    }
  });
}

// Function to initialize Swiper for Middle East
function initializeSwiperMiddle() {
  if (swiperMiddle) {
    swiperMiddle.destroy();
    swiperMiddle = null;
  }
  swiperMiddle = new Swiper(".swiperMiddle", {
    direction: "horizontal",
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiperMiddle .swiper-button-next",
      prevEl: ".swiperMiddle .swiper-button-prev"
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 20 },
      1400: { slidesPerView: 5, spaceBetween: 0 }
    }
  });
}

// Function to initialize Swiper for Asia
function initializeSwiperAsia() {
  if (swiperAsia) {
    swiperAsia.destroy();
    swiperAsia = null;
  }
  swiperAsia = new Swiper(".swiperAsia", {
    direction: "horizontal",
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiperAsia .swiper-button-next",
      prevEl: ".swiperAsia .swiper-button-prev"
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 20 },
      1400: { slidesPerView: 5, spaceBetween: 0 }
    }
  });
}

// Function to initialize Swiper for America
// function initializeSwiperAmerica() {
//   if (swiperAmerica) {
//     swiperAmerica.destroy();
//     swiperAmerica = null;
//   }
//   swiperAmerica = new Swiper(".swiperAmerica", {
//     direction: "horizontal",
//     slidesPerView: 1,
//     loop: true,
//     speed: 1000,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: true,
//     },
//   });
// }

// Function to initialize Swiper for South America
// function initializeSwiperSouthAmerica() {
//   if (swiperSouthAmerica) {
//     swiperSouthAmerica.destroy();
//     swiperSouthAmerica = null;
//   }
//   swiperSouthAmerica = new Swiper(".swiperSouthAmerica", {
//     direction: "horizontal",
//     slidesPerView: 1,
//     loop: true,
//     speed: 1000,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: true,
//     },
//   });
// }

// Hide all sliders initially
document.querySelector(".africa-slider").style.display = "none";
document.querySelector(".america-slider").style.display = "none";
document.querySelector(".america-south-slider").style.display = "none";
document.querySelector(".asia-slider").style.display = "none";
document.querySelector(".europ-slider").style.display = "none";
document.querySelector(".middle-east-slider").style.display = "none";

function showSlider(target, sliderToShow) {
  const sliders = [
    ".africa-slider",
    ".america-slider",
    ".america-south-slider",
    ".asia-slider",
    ".europ-slider",
    ".middle-east-slider"
  ];

  // Hide all sliders
  sliders.forEach(slider => {
    const element = document.querySelector(slider);
    if (element) {
      element.style.display = "none";
    } else {
      console.error(`Slider ${slider} not found!`);
    }
  });

  // Show the specific slider
  const sliderElement = document.querySelector(sliderToShow);
  if (sliderElement) {
    sliderElement.style.display = "block";
    sliderElement.classList.add("active");

    // Initialize Swiper if the slider is displayed
    if (sliderToShow === ".asia-slider") {
      initializeSwiperAsia(); // Initialize Asia Swiper
    } else if (sliderToShow === ".middle-east-slider") {
      initializeSwiperMiddle(); // Initialize Middle East Swiper
    } else if (sliderToShow === ".africa-slider") {
      initializeSwiperAfrica(); // Initialize Middle East Swiper
    } else if (sliderToShow === ".europ-slider") {
      initializeSwiperEurope(); // Initialize Middle East Swiper
    }
  } else {
    console.error(`Slider ${sliderToShow} not found!`);
  }

  // Hide the up-hand
  const upHand = document.querySelector(".up-hand");
  if (upHand) {
    upHand.style.display = "none";
  } else {
    console.warn("Up-hand element not found!");
  }

  // Remove active class from all buttons
  document
    .querySelectorAll(
      "#africa, #america, #america-south, #asia, #europe, #middleeast"
    )
    .forEach(elem => {
      elem.classList.remove("active");
    });

  // Add active class to the target element
  target.classList.add("active");
}

// Add event listeners
document.querySelector("#africa").addEventListener("mouseover", function() {
  showSlider(this, ".africa-slider");
});

document.querySelector("#america").addEventListener("mouseover", function() {
  showSlider(this, ".america-slider");
});
document
  .querySelector("#america-south")
  .addEventListener("mouseover", function() {
    showSlider(this, ".america-south-slider");
  });

document.querySelector("#asia").addEventListener("mouseover", function() {
  showSlider(this, ".asia-slider");
});

document.querySelector("#europe").addEventListener("mouseover", function() {
  showSlider(this, ".europ-slider");
});

document.querySelector("#middleeast").addEventListener("mouseover", function() {
  showSlider(this, ".middle-east-slider");
});
