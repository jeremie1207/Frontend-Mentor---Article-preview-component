"use-strict";

const shareBtn = document.getElementById("share-button");
const closeShareBtnMobile = document.getElementById(
  "close-share-button-mobile"
);

const componentShare = document.querySelector(".component__share");

const hiddenShareComponent = () => {
  componentShare.classList.toggle("show-hidden-flex-container");
};

shareBtn.addEventListener("click", hiddenShareComponent);

closeShareBtnMobile.addEventListener("click", hiddenShareComponent);
