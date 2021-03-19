const button = document.getElementById('check');
const percentageHT = document.getElementById('percentage');

button.addEventListener('click', () => {

  let randNum = Math.random();
  randNum = Math.floor(randNum*100) + 1;
  const percentage = randNum + "%";

  percentageHT.innerHTML = percentage;
  console.log(percentage);
});
