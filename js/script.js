var startDate = new Date('march 24, 2020').getTime()
var days, hours, minutes, seconds
var regressiva = document.getElementById('regressiva')

setInterval(function () {
  var currentDate = new Date().getTime()
  var secondsCalculation = (currentDate - startDate) / 1000

  days = parseInt(secondsCalculation / 86400)
  secondsCalculation = secondsCalculation % 86400

  hours = parseInt(secondsCalculation / 3600)
  secondsCalculation = secondsCalculation % 3600

  minutes = parseInt(secondsCalculation / 60)
  seconds = parseInt(secondsCalculation % 60)

  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = hours
  document.getElementById('minutes').innerHTML = minutes
  document.getElementById('seconds').innerHTML = seconds
}, 1000)

// Função do Codepen.io/VictorPubh/pen/XWmpaVz
function shareWith(social){
  var message = "Veja a quanto tempos estamos de quarentena: https://victorpubh.github.io/quarantine-days/";
  
  switch(social){
    case "WhatsApp":
      window.open("http://wa.me/?text=" + message);
    break;
    case "Facebook":
      window.open("https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fvictorpubh.github.io%2Fquarantine-days%2F&display=popup&ref=plugin&src=share_button", "_blank", "height=" + window.innerheight + ", width=" + window.innerwidth + ", resizable=no");      
    break;
    case "Messenger":
      alert("Ooops! \nAlgo parece não funcionar bem.");
    break;
  }
}