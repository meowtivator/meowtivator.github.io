const stateOrder = [
  "planet--top",
  "planet--right",
  "planet--bottom",
  "planet--left",
];

document.querySelectorAll(".planet").forEach((planet) => {
  planet.addEventListener("click", () => {
    let shift = 0;
    if (planet.classList.contains("planet--top")) {
      shift = 2;
    } else if (planet.classList.contains("planet--right")) {
      shift = 1;
    } else if (planet.classList.contains("planet--left")) {
      shift = -1;
    }

    document.querySelectorAll(".planet").forEach((p) => {
      let currentIndex = stateOrder.findIndex((state) =>
        p.classList.contains(state)
      );
      if (currentIndex === -1) return;

      if (shift !== 2) {
        let newIndex = (currentIndex + shift + 4) % 4;
        p.classList.remove(...stateOrder);
        p.classList.add(stateOrder[newIndex]);
      } else {
        for (let i = 1; i <= 2; i++) {
          setTimeout(() => {
            let newIndex = (currentIndex + i + 4) % 4;
            p.classList.remove(...stateOrder);
            p.classList.add(stateOrder[newIndex]);
          }, i * 400);
        }
      }
    });
  });
});
