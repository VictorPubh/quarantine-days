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
