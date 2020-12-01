// DOM
const daysBox = document.getElementById('days');
const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');

// Fonction qui affiche le temps restant jusqu'à endDate
let getRemainingTime = () => {
  // Date de fin
  let endDate = new Date('1 January 2021 00:00:00');
  // Date actuelle
  let now = new Date();
  // Différence date de fin - date actuelle
  let timeRemaining = endDate - now;

  // Calculs du temps pour les jours, heures, minutes, secondes
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Affichage
  daysBox.innerText = `Days: ${days}`;
  hoursBox.innerText = `Hours: ${hours}`;
  minutesBox.innerText = `Minutes: ${minutes}`;
  secondsBox.innerText = `Seconds: ${seconds}`;
}

// Fonction qui lance getRemainingTime() à intervalles réguliers
setInterval(getRemainingTime, 100);
