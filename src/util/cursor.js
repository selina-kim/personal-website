const bigBall = document.getElementById("cursor-big");
const smallBall = document.getElementById("cursor-small");
const hoverables = document.querySelectorAll(".hoverable");

// Listeners
window.addEventListener("mousemove", onMouseMove);

for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  smallBall.style.left = `${posX}px`;
  smallBall.style.top = `${posY}px`;

  bigBall.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 350, fill: "forwards" },
  );
}

// Hover an element
function onMouseHover() {
  bigBall.classList.add("cursor-big-hover");
}

function onMouseHoverOut() {
  bigBall.classList.remove("cursor-big-hover");
}
