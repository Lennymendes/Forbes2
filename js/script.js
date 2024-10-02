// let electricCars, totalCars;

// document.addEventListener("DOMContentLoaded", function() {
//     let s = Snap("#svg-container");
//     Snap.load("svg/Camenbert.svg", function(fragment) {
//         s.append(fragment);
        
//         electricCars = s.select("#Légende_électrique");
//         totalCars = s.select("#Légende_total");
        
//         electricCars.mouseover(function() {
//             electricCars.animate({ transform: 's1.1, 1.1' }, 300);
//         }).mouseout(function() {
//             electricCars.animate({ transform: 's1, 1' }, 300);
//         });

//         electricCars.click(function() {
//             alert("Nombre de véhicules électriques : 839 000");
//         });

//         totalCars.click(function() {
//             totalCars.animate({ fill: "#ff0000" }, 300);
//         });
//     });

//     let resetButton = document.createElement("button");
//     resetButton.innerText = "Réinitialiser les couleurs";
//     document.body.appendChild(resetButton);

//     resetButton.addEventListener("click", function() {
//         electricCars.animate({ fill: "#56a5db" }, 300);
//         totalCars.animate({ fill: "#95c356" }, 300);
//     });

//     let animateButton = document.createElement("button");
//     animateButton.innerText = "Animer les segments";
//     document.body.appendChild(animateButton);

//     animateButton.addEventListener("click", function() {
//         electricCars.animate({ transform: 'r45' }, 500);
//         totalCars.animate({ transform: 'r45' }, 500);
//     });
// });
