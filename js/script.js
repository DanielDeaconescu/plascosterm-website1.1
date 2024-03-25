function scrollFunction() {
  const theNavigation = document.querySelector(".navbar");
  const toTopBtn = document.querySelector("#to-top");

  if (window.scrollY > 50) {
    theNavigation.classList.add("navbar-sticky");
    toTopBtn.classList.remove("hidden");
  } else if (window.scrollY < 50) {
    toTopBtn.classList.add("hidden");
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      theNavigation.classList.add("navbar-sticky");
      toTopBtn.classList.remove("hidden");
      toTopBtn.style.cursor = "pointer";
    } else {
      theNavigation.classList.remove("navbar-sticky");
      toTopBtn.classList.add("hidden");
      toTopBtn.style.cursor = "default";
    }
  });
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const allOverlayElements = document.querySelectorAll(".overlay-element");
for (let i = 0; i < allOverlayElements.length; i++) {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      allOverlayElements[0].classList.remove("hidden");
      allOverlayElements[0].classList.add("visible");
    }, 1200);
  });
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      allOverlayElements[1].classList.remove("hidden");
      allOverlayElements[1].classList.add("visible");
    }, 2400);
  });
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      allOverlayElements[2].classList.remove("hidden");
      allOverlayElements[2].classList.add("visible");
    }, 3600);
  });
}

// Display text when hovering the phone, icon and WhatsApp icons

const allImages = document.querySelectorAll(".link-custom-style");
const allOverlays = document.querySelectorAll(".link-overlay-text");

// Making the overlay appear on hover
for (let i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("mouseover", function () {
    allOverlays[i].classList.remove("hidden");
    allOverlays[i].classList.add("visible");
  });
  allImages[i].addEventListener("mouseout", function () {
    allOverlays[i].classList.remove("visible");
    allOverlays[i].classList.add("hidden");
  });
}

// Phone - Form - WhatsApp

const callIcon = document.querySelector(".call-icon");
const phoneText = document.querySelector(".phone-text");

callIcon.addEventListener("mouseover", function () {
  phoneText.classList.remove("hidden");
  phoneText.classList.add("visible");
});

callIcon.addEventListener("mouseout", function () {
  phoneText.classList.remove("visible");
  phoneText.classList.add("hidden");
});

const formIcon = document.querySelector(".form-icon");
const formText = document.querySelector(".form-text");

formIcon.addEventListener("mouseover", function () {
  formText.classList.remove("hidden");
  formText.classList.add("visible");
});

formIcon.addEventListener("mouseout", function () {
  formText.classList.remove("visible");
  formText.classList.add("hidden");
});

const whatsappButton = document.querySelector(".whatsapp-btn");
const whatsappText = document.querySelector(".whatsapp-text");

whatsappButton.addEventListener("mouseover", function () {
  whatsappText.classList.remove("hidden");
  whatsappText.classList.add("visible");
});

whatsappButton.addEventListener("mouseout", function () {
  whatsappText.classList.remove("visible");
  whatsappText.classList.add("hidden");
});

// Photo Gallery filter
const allFilterButtons = document.querySelectorAll(".gallery-btn");
const allFilterImages = document.querySelectorAll(".filterable_cards .card");
const allInnerLinks = document.querySelectorAll(".custom-card a");

const setInitialLightbox = () => {
  allInnerLinks.forEach((link) => {
    link.dataset.lightbox = "images";
  });
};

window.addEventListener("load", setInitialLightbox);

const filterCards = (btn) => {
  // Remove the active class from all buttons
  allFilterButtons.forEach((button) => {
    button.classList.remove("gallery-active");
  });

  // Add active class to the clicked button
  btn.target.classList.add("gallery-active");

  // Hide all cards initially
  allFilterImages.forEach((card) => {
    card.classList.add("hide");
  });

  // Show cards based on selected category
  const selectedCategory = btn.target.dataset.name;
  allFilterImages.forEach((card) => {
    if (selectedCategory === "all" || selectedCategory === card.dataset.name) {
      card.classList.remove("hide");
    }
  });

  // Set data-lightbox attribute for links based on category
  allInnerLinks.forEach((link) => {
    const linkCategory = link.dataset.custom;
    if (selectedCategory === "all" || selectedCategory === linkCategory) {
      link.dataset.lightbox = "images";
    } else {
      link.dataset.lightbox = null;
    }
  });
};

allFilterButtons.forEach((button) => {
  button.addEventListener("click", filterCards);
});

// projects.html - "Read More" buttons

if (window.location.pathname === "/projects.html") {
  // the button
  const readMore1 = document.querySelector(".read_more1");
  // the paragraph
  const moreInfo1 = document.querySelector(".more_info1");

  readMore1.addEventListener("click", function () {
    if (moreInfo1.classList.contains("display_none")) {
      moreInfo1.classList.remove("display_none");
      readMore1.innerHTML = "Mai puțin";
    } else {
      moreInfo1.classList.add("display_none");
      readMore1.innerHTML = "Citește mai mult";
    }
  });

  // the button
  const readMore2 = document.querySelector(".read_more2");
  // the paragraph
  const moreInfo2 = document.querySelector(".more_info2");

  readMore2.addEventListener("click", function () {
    if (moreInfo2.classList.contains("display_none")) {
      moreInfo2.classList.remove("display_none");
      readMore2.innerHTML = "Mai puțin";
    } else {
      moreInfo2.classList.add("display_none");
      readMore2.innerHTML = "Citește mai mult";
    }
  });

  // the button
  const readMore3 = document.querySelector(".read_more3");
  // the paragraph
  const moreInfo3 = document.querySelector(".more_info3");

  readMore3.addEventListener("click", function () {
    if (moreInfo3.classList.contains("display_none")) {
      moreInfo3.classList.remove("display_none");
      readMore3.innerHTML = "Mai puțin";
    } else {
      moreInfo3.classList.add("display_none");
      readMore3.innerHTML = "Citește mai mult";
    }
  });

  // the button
  const readMore4 = document.querySelector(".read_more4");
  // the paragraph
  const moreInfo4 = document.querySelector(".more_info4");

  readMore4.addEventListener("click", function () {
    if (moreInfo4.classList.contains("display_none")) {
      moreInfo4.classList.remove("display_none");
      readMore4.innerHTML = "Mai puțin";
    } else {
      moreInfo4.classList.add("display_none");
      readMore4.innerHTML = "Citește mai mult";
    }
  });

  // the button
  const readMore5 = document.querySelector(".read_more5");
  // the paragraph
  const moreInfo5 = document.querySelector(".more_info5");

  readMore5.addEventListener("click", function () {
    if (moreInfo5.classList.contains("display_none")) {
      moreInfo5.classList.remove("display_none");
      readMore5.innerHTML = "Mai puțin";
    } else {
      moreInfo5.classList.add("display_none");
      readMore5.innerHTML = "Citește mai mult";
    }
  });

  // the button
  const readMore6 = document.querySelector(".read_more6");

  // the paragraph
  const moreInfo = document.querySelector(".more_info6");

  readMore6.addEventListener("click", function () {
    if (moreInfo.classList.contains("display_none")) {
      moreInfo.classList.remove("display_none");
      readMore6.innerHTML = "Mai puțin";
    } else {
      moreInfo.classList.add("display_none");
      readMore6.innerHTML = "Citește mai mult";
    }
  });
}

// Tech Info Button - automatically scroll to services.html#products

document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    const theButton = document.querySelector(".overlay-element-3");

    theButton.addEventListener("click", function () {
      const scrollPosition = 1645;
      sessionStorage.setItem("scrollPosition", scrollPosition);
      window.location.href = "services.html";
    });
  }

  if (window.location.pathname === "/services.html") {
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition !== null) {
      window.scrollTo({
        top: parseInt(scrollPosition),
        behavior: "smooth",
      });
      sessionStorage.removeItem("scrollPosition");
    }
  }
});

// Contactati-ne - index.html - trebuie sa duca pe contact.html si sa faca scroll

document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    const contactUsBtn = document.querySelector(".contact-us-btn");

    contactUsBtn.addEventListener("click", function () {
      const scrollPosition2 = 677;
      sessionStorage.setItem("scrollPosition2", scrollPosition2);
      window.location.href = "contact.html";
    });
  }

  if (window.location.pathname === "/contact.html") {
    const scrollPosition2 = sessionStorage.getItem("scrollPosition2");

    if (scrollPosition2 !== null) {
      window.scrollTo({
        top: parseInt(scrollPosition2),
        behavior: "smooth",
      });
      sessionStorage.removeItem("scrollPosition2");
    }
  }
});

// Afla mai mult - index.html - trebuie sa duca pe about.html si sa faca scroll

document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    const findOutMoreBtn = document.querySelector(".custom-btn1");

    findOutMoreBtn.addEventListener("click", function () {
      const scrollPosition3 = 453;
      sessionStorage.setItem("scrollPosition3", scrollPosition3);
      window.location.href = "about.html";
    });
  }

  if (window.location.pathname === "/about.html") {
    const scrollPosition3 = sessionStorage.getItem("scrollPosition3");

    if (scrollPosition3 !== null) {
      window.scrollTo({
        top: parseInt(scrollPosition3),
        behavior: "smooth",
      });
      sessionStorage.removeItem("scrollPosition3");
    }
  }
});

// index.html - "Afla mai mult" - Serviciile noastre - trebuie sa duca pe services.html si sa faca scroll

document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    const findOutMoreBtn2 = document.querySelector(".custom-btn2");

    findOutMoreBtn2.addEventListener("click", function () {
      const scrollPosition4 = 596;
      sessionStorage.setItem("scrollPosition4", scrollPosition4);
      window.location.href = "services.html";
    });
  }

  if (window.location.pathname === "/services.html") {
    const scrollPosition4 = sessionStorage.getItem("scrollPosition4");

    if (scrollPosition4 !== null) {
      window.scrollTo({
        top: parseInt(scrollPosition4),
        behavior: "smooth",
      });
      sessionStorage.removeItem("scrollPosition4");
    }
  }
});

// Services - Show More Button
const showMoreButton = document.querySelector(".inner-show-more-button");
const concealableElements = document.querySelectorAll(".concealable");

if (window.location.pathname === "/services.html") {
  showMoreButton.addEventListener("click", function () {
    concealableElements.forEach((e) => {
      e.classList.toggle("d-none");
    });

    if (showMoreButton.innerHTML === "Arată mai mult") {
      showMoreButton.innerHTML = "Mai puțin";
    } else if (showMoreButton.innerHTML === "Mai puțin") {
      showMoreButton.innerHTML = "Arată mai mult";
    }
  });
}

// Restting the form

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Prevent the default behavior of the form = when hitting the "Anuleaza" button, the form date will no longer be submitted

const form = document.getElementById("form_modal");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Event Listeners
document.addEventListener("DOMContentLoaded", scrollFunction);

document.querySelector("#to-top").addEventListener("click", scrollToTop);
