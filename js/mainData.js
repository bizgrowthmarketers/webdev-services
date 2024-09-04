// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Website Development
  const scrollWrapper = document.querySelector(".scroll-wrapper");

  projectsData.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.classList.add("scroll-images");

    const imgElement = document.createElement("img");
    imgElement.src = project.imgSrc;
    imgElement.alt = project.altText;

    const textDiv = document.createElement("div");
    textDiv.classList.add("scroll-text");

    const linkElement = document.createElement("a");
    linkElement.href = project.linkUrl;
    linkElement.target = "_blank";
    linkElement.textContent = project.linkText;
    linkElement.classList.add("scroll-text");

    textDiv.appendChild(linkElement);
    listItem.appendChild(imgElement);
    listItem.appendChild(textDiv);

    scrollWrapper.appendChild(listItem);
  });
});

// Website Designs
const ulElement = document.createElement("ul");
ulElement.classList.add("swiper-wrapper", "swiper-image-wrapper");
const swiperContainer = document.querySelector(".swiper.coverflow");

designsData.forEach((design) => {
  const listItem = document.createElement("li");
  listItem.classList.add("swiper-slide", "swiper-image-container");

  const linkElement = document.createElement("a");
  linkElement.href = design.linkUrl;
  linkElement.target = "_blank";

  const imgElement = document.createElement("img");
  imgElement.src = design.imgSrc;
  imgElement.alt = design.altText;
  imgElement.classList.add("swiper-image");

  linkElement.appendChild(imgElement);
  listItem.appendChild(linkElement);
  ulElement.appendChild(listItem);
});

swiperContainer.insertBefore(ulElement, swiperContainer.firstChild);
