var fahrenheit = Number(prompt('Type the temperature in Fahrenheit:'))


var celsius = ((fahrenheit-32)/1.8).toFixed(2)


if (celsius <= 5){
    alert('This temperature represents ' + celsius + '°C. \n \n That is very cold!')
}
 else if (5 < celsius && celsius <= 20){
    alert('This temperature represents ' + celsius + '°C. \n \n Cool!')
}
else if (20 < celsius && celsius <= 30){
    alert('This temperature represents ' + celsius + '°C. \n \n Feels like the perfect temperature for the human body.')
}
else if (30 < celsius && celsius <= 40){
    alert("This temperature represents " + celsius + "°C. \n \n It's warm.")
}
else if (celsius>40) {
    alert("This temperature represents " + celsius + "°C. \n \n It's so hot you're probably in Rio de Janeiro.")
}
else if (fahrenheit !== Number){
    alert("The result is unavaliable.")
}