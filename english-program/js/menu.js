(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mobileProgramClose = document.querySelector("[program-menu-close]");
  const mobileAboutClose = document.querySelector("[about-menu-close]");
  const mobileTrainingClose = document.querySelector("[training-menu-close]");
  const mobileContactsClose = document.querySelector("[contacts-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });

  mobileProgramClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });

  mobileAboutClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });

  mobileTrainingClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });

  mobileContactsClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  });
})();