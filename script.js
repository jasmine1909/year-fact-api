const fact = document.querySelector("#fact");
const factText = document.querySelector("#factText");
const yearInput = document.querySelector("#yearInput");
yearInput.addEventListener("input", getFactFetch);
function getFactFetch() {
  let year = yearInput.value;
  fetch("http://numbersapi.com/" + year + "/year")
    .then((response) => response.text())
    .then((data) => {
      if (year != "") {
        fact.style.display = "block";
        factText.innerHTML = data;
      }
    })
    .catch((err) => console.log(err));
}
