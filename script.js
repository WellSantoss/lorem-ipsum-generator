import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();
const btnGenerate = document.querySelector("button");
const inputAmount = document.querySelector("#amount");
const inputType = document.querySelector("#type");
const divGenerated = document.querySelector(".generated");

function showGenerated(element, content) {
  const paragraph = document.createElement(element);
  paragraph.innerText = content;
  divGenerated.appendChild(paragraph);
}

function generate(amount, type) {
  if (type === "words") {
    showGenerated("span", lorem.generateWords(amount));
  } else if (type === "sentences") {
    showGenerated("span", lorem.generateSentences(amount));
  } else if (type === "paragraphs") {
    for (let i = 1; i <= amount; i += 1) {
      showGenerated("p", lorem.generateParagraphs(1));
    }
  }
}

btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  divGenerated.innerHTML = "";
  generate(+inputAmount.value, inputType.value);
});
