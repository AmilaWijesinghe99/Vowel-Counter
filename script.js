window.addEventListener("DOMContentLoaded", () => {
  const vowelCount = document.getElementById("value");
  const input = document.getElementById("textarea");

  function countVowel(str) {
    str = str.toLowerCase();
    const vowArr = ["a", "e", "i", "o", "u"];
    let counter = 0;

    for (let letter of str) {
      if (vowArr.includes(letter)) {
        counter++;
      }
    }

    vowelCount.innerHTML = counter;

    if (counter > 0) {
      vowelCount.classList.add("blink");
    } else {
      vowelCount.classList.remove("blink");
    }
  }

  if (input) {
    input.addEventListener("keyup", () => countVowel(input.value));
  }
});
