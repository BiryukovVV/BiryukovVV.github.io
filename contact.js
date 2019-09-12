(() => {
   const topSiteText = document.getElementsByClassName("top-site__text")[0];
   
   let linkPhoneOffice = document.createElement("a")
   let linkPhoneFax = document.createElement("a")
   let linkMail = document.createElement("a")

   linkPhoneOffice.classList.add("top-site__phone","phone","top-site__phone_js")
   linkPhoneFax.classList.add("top-site__phone","phone","top-site__phone_js")
   linkMail.classList.add("top-site__phone","phone","top-site__phone_js")

   linkPhoneOffice.innerHTML = "Office: (720) 328-5343"
   linkPhoneFax.innerHTML = "Fax: (720) 328-5297"
   linkMail.innerHTML = "ben@wip.net"

   linkPhoneOffice.href = "tel:(720) 328-5343"
   linkPhoneFax.href = "tel:(720) 328-5297"
   linkMail.href = "ben@wip.net"

   topSiteText.insertAdjacentElement("afterend", linkMail) 
   topSiteText.insertAdjacentElement("afterend", linkPhoneFax)
   topSiteText.insertAdjacentElement("afterend", linkPhoneOffice)
})()
 