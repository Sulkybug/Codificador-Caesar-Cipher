const alphabet: string[][] = [
  ["A"],
  ["B"],
  ["C"],
  ["D"],
  ["E"],
  ["F"],
  ["G"],
  ["H"],
  ["I"],
  ["J"],
  ["K"],
  ["L"],
  ["M"],
  ["N"],
  ["O"],
  ["P"],
  ["Q"],
  ["R"],
  ["S"],
  ["T"],
  ["U"],
  ["V"],
  ["W"],
  ["X"],
  ["Y"],
  ["Z"],
];

const addButton = document.querySelector(".add") as HTMLButtonElement;
const subtractButton = document.querySelector(".subtract") as HTMLButtonElement;
const rot = document.getElementById("rotText") as HTMLParagraphElement;

let count = 0;

subtractButton?.addEventListener("click", () => {
  if (count > 0) {
    count--;
    rot.textContent =
      count + " " + alphabet[count % 26] + " - " + alphabet[(25 + count) % 26];
  } else {
    count = 26;
    rot.textContent =
      count + " " + alphabet[count % 26] + " - " + alphabet[(25 + count) % 26];
  }
});

addButton.addEventListener("click", () => {
  if (count < 26) {
    count++;
    rot.textContent =
      count + " " + alphabet[count % 26] + " - " + alphabet[(25 + count) % 26];
  } else {
    count = 0;
    rot.textContent =
      count + " " + alphabet[count % 26] + " - " + alphabet[(25 + count) % 26];
  }
});

const entry = document.querySelector(".entry") as HTMLTextAreaElement;
let output = document.getElementById("output") as HTMLParagraphElement;
const encryptButton = document.querySelector(".transform") as HTMLButtonElement;

encryptButton.addEventListener("click", () => {
  const newValue: string = entry.value;
  let num = count;

  function rot(str: string, num: number) {
    let result = "";
    let newstr = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let strRegex = /[^a-zA-Z]+/gm;
      if (strRegex.test(newstr[i])) {
        result += newstr[i];
      }

      for (let j = 0; j < alphabet.length; j++) {
        if (newstr[i] === alphabet[j][0]) {
          result += alphabet[(j + num) % 26];
        }
      }
    }
    return result;
  }

  let result = rot(newValue, num);
  output.innerText = result;
});

const translateButton = document.querySelector(
  ".translate"
) as HTMLButtonElement;

translateButton.addEventListener("click", () => {
  const newValue = entry.value;
  let num = count;

  function rot(str: string, num: number) {
    let result = "";
    let newstr = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let strRegex = /[^a-zA-Z]+/gm;
      if (strRegex.test(newstr[i])) {
        result += newstr[i];
      }

      for (let j = 0; j < alphabet.length; j++) {
        if (newstr[i] === alphabet[j][0]) {
          result += alphabet[(26 + j - num) % 26];
        }
      }
    }
    return result;
  }

  let result = rot(newValue, num);

  output.innerText = result;
});

const deleteButton = document.querySelector(".delete") as HTMLButtonElement;

deleteButton.addEventListener(
  "click",
  function () {
    entry.value = "";
  },
  false
);

const copyButton = document.getElementById("copy1") as HTMLButtonElement;

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(output.innerText);
});
