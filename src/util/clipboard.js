const button = document.querySelector("button");
const tooltip = document.getElementById("myTooltip");

button.addEventListener("click", copyToClipboard);
button.addEventListener("mouseleave", copiedToClipboard);

function copyToClipboard() {
  var text = document.getElementById("myInput").innerText;
  navigator.clipboard.writeText(text);

  tooltip.innerText = "copied !";
}

function copiedToClipboard() {
  tooltip.innerText = "copy";
}
