(() => {
   const boxButton = document.getElementsByClassName("header__wrap-btn_js")[0];

   let addBtnContactUs = document.createElement("a");
   let addBtnViewOurServices = document.createElement("a");
   let addBtnDownloadPatent = document.createElement("a");
   // открыть модалку при нажатии на  addBtnContactUs 
   addBtnContactUs.href = "";
   addBtnViewOurServices.href = "what-we-do.html";
   addBtnDownloadPatent.href = "";

   addBtnContactUs.innerHTML = "CONTACT US";
   addBtnViewOurServices.innerHTML = "View Our Services";
   addBtnDownloadPatent.innerHTML = "Download Patent Overview";

   addBtnContactUs.classList = "header__button header__button_add_js header__button-desktop button button-arrow_black"
   addBtnViewOurServices.classList = "header__button header__button_add_js header__button-desktop button button-arrow_black"
   addBtnDownloadPatent.classList = "header__button header__button_add_js header__button-desktop button button-arrow_black"

   boxButton.insertAdjacentElement("beforeend", addBtnContactUs)
   boxButton.insertAdjacentElement("beforeend", addBtnViewOurServices)
   boxButton.insertAdjacentElement("beforeend", addBtnDownloadPatent)

})()