let countdownInterval;

function Duration() {
  const days = parseInt(document.getElementById('days').value)||0;
  const hours = parseInt(document.getElementById('hours').value)||0;
  const minutes = parseInt(document.getElementById('minutes').value)||0;
  const seconds = parseInt(document.getElementById('seconds').value)||0;

  return (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
}

function updateCountdownDisplay(timer) {
  const days = Math.floor(timer / (60 * 60 * 24));
  const hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timer % (60 * 60)) / 60);
  const seconds = timer % 60;

  document.getElementById('display').innerHTML =
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

function start() {
  const seconds = Duration();

  let timer = seconds;

  function updateCountdown() {
    updateCountdownDisplay(timer);

    if (timer === 0) {
      clearInterval(countdownInterval);
      alert('Countdown complete!');
    } 
    else 
    {
      timer--;
    }
  }

  updateCountdown(); 

  countdownInterval = setInterval(updateCountdown,1000); 
}

function stop() {
  clearInterval(countdownInterval);
  alert('Countdown stopped!');
  
  document.getElementById('timer').innerHTML = '';
  document.getElementById('days').value = '';
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
}