// const URLRequest =
//   "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";

// // BARRA DI RICERCA
// // Dichiaro variabile per input di ricerca
// // Ottenere il riferimento all'elemento con ID "searchIcon"
// const searchInputReference = document.getElementById("searchIcon");

// searchInputReference.addEventListener("click", (e) => {
//   e.preventDefault();
//   const input = document.createElement("<input>");
//   input.placeholder = "inserisci testo";
//   input.style.cssText = `
//     animation: slideIn 0.5s forwards;
//     background-color: white;
//     border: none;
//     color: white;
//     outline-style: none;
//     border-bottom: 1px solid gray;
//     transform-origin: top right;
//   `;

//   searchInputReference.parentNode.replaceChild(input, searchInputReference);
// });

// const fadeAnimate = `
//   @keyframes slideIn {
//     from {
//       transform: scaleX(0);
//       opacity: 0;
//     }
//     to {
//       transform: scaleX(1);
//       opacity: 1;
//     }
//   }
// `;
// let inputFade = document.createElement("style");
// inputFade.innerHTML = fadeAnimate;
// document.head.appendChild(inputFade);
