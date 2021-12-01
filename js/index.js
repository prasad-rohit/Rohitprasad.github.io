let date = new Date();
console.log(date.getDate());
// let current = date.getMonth();

// function month(current) {
//     switch(current){
//         case 1:
//             return "Janurary"
//             break
//         case 2:

//     }
// }

document.querySelector(
  ".today"
).innerHTML = ` ${date.getDate()}  ${date.toLocaleString("default", {
  month: "short",
})}`;

ScrollReveal({ reset: true });
ScrollReveal().reveal(".first-work", { delay: 400 });
ScrollReveal().reveal(".second-work", { delay: 400 });
ScrollReveal().reveal(".skills", { delay: 400 });
ScrollReveal().reveal("#coding-profiles", { delay: 400 });
ScrollReveal().reveal(".contact-me", { delay: 400 });

// const section = document.querySelector("header");

// let currentPos = window.pageYOffset;

// const update = () => {
//   const newPos = window.pageYOffset;
//   const diff = newPos - currentPos;
//   const speed = diff * 0.25;

//   section.style.transform = `skewY(${speed}deg)`;

//   currentPos = newPos;

//   requestAnimationFrame(update);
// };

// update();
