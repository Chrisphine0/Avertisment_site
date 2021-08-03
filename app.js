// setTimeout(function () {
//   $(".loader_bg").fadeToggle();
// }, 1500);

// button moodal js
const openBtn = document.querySelector(".open");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".modal-btn");

openBtn.addEventListener("click", function () {
  modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  modalContainer.classList.remove("show");
});

// gallery
const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery-row img");
const modal = document.querySelector(".modal-1");

smallImg.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.classList.add("open-1");
    fullImg.classList.add("open-1");

    //   changing dynamically
    const Quality = img.getAttribute("alt");
    fullImg.src = `images/full/${Quality}.jpg`;
  });
});
//  exiting full screen
modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-1")) {
    modal.classList.remove("open-1");
    fullImg.classList.remove("open-1");
  }
});

// navbar effect
const section = document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const gradients = ["black", "white", "chocolate", "purple", "blue"];

const option = {
  threshold: 0.6,
};

let observer = new IntersectionObserver(navScroll, option);

function navScroll(entries) {
  entries.forEach(function (entry) {
    const className = entry.target.className;
    const activeLink = document.querySelector(`[data-page="${className}"]`);
    const elementIndex = entry.target.getAttribute("data-index");
    const coordinates = activeLink.getBoundingClientRect();
    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };

    if (entry.isIntersecting) {
      trans.style.setProperty("height", `${directions.height}px`);
      trans.style.setProperty("width", `${directions.width}px`);
      trans.style.setProperty("top", `${directions.top}px`);
      trans.style.setProperty("left", `${directions.left}px`);
      trans.style.backgroundColor = gradients[elementIndex];
    }
  });
}

section.forEach(function (section) {
  observer.observe(section);
});
