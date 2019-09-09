const titleWhatWeDo = document.getElementsByClassName("what-we-do__title_js")[0];
const newText = document.createElement("p");

newText.classList.add("what-we-do__subtitle_js", "what-we-do__subtitle");
newText.innerText = "Over the last five years, practitioners at Williams Intellectual Property have written more than 500 utility patent applications for clients across the world. A brief Overview of Patent Types…";
titleWhatWeDo.insertAdjacentElement("afterend", newText);
