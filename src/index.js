const CHARACTER_SETS = {
  digits: "0123456789",
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbols: "!@#$%^&*()-_+=[]{}\\|;:'\",.<>/?`~",
};

function generatePassword(formData) {
  let passwordCharacters = "";
  if (formData.useDigits) {
    passwordCharacters += CHARACTER_SETS.digits;
  }
  if (formData.useLetters) {
    passwordCharacters += CHARACTER_SETS.letters;
  }
  if (formData.useSymbols) {
    passwordCharacters += CHARACTER_SETS.symbols;
  }
  let password = "";
  for (let i = 0; i < formData.length; i++) {
    password +=
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return password;
}

const form = document.querySelector("#password-form");
const passwordContainer = document.querySelector("#password-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    length: Number(form.elements.namedItem("length").value),
    useDigits: form.elements.namedItem("use-digits").checked,
    useLetters: form.elements.namedItem("use-letters").checked,
    useSymbols: form.elements.namedItem("use-symbols").checked,
  };
  const password = generatePassword(formData);
  passwordContainer.textContent = password;
});

function copyPass() {
  const textToCopy = document.getElementById("password-container").innerHTML;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const copyButton = document.getElementsByTagName("button")[1];
    copyButton.innerHTML = "Password copied!";
  });
}

const generateButton = document.querySelector('button[type="submit"]');
const copyButton = document.getElementById("copy");

generateButton.addEventListener("click", function () {
  copyButton.innerHTML = "Copy password";
  copyButton.style.visibility = "visible";
});
