var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var number1 = document.getElementById('number1');
var number3 = document.getElementById('number3');

function start(){
  number1.innerHTML = 20;
  if(number1.innerHTML == 20){
    red.style.backgroundColor = "#EB0006";
  var div1 = setInterval(function(){
    number1.innerHTML--;
    if(number1.innerHTML == 0){
      number1.innerHTML = '';
      clearInterval(div1);
      yellow.style.backgroundColor = "#FAD109";
      var div2 = setInterval(function(){
        red.style.backgroundColor = "black";
        yellow.style.backgroundColor = "black";
        clearInterval(div2);
        green.style.backgroundColor = "#34AD1B";
        number3.innerHTML = 20;
        var div3 = setInterval(function(){
          number3.innerHTML--;
          if(number3.innerHTML == 0){
            number3.innerHTML = '';
            green.style.backgroundColor = "black";
            clearInterval(div3);
            yellow.style.backgroundColor = "#FAD109";
            var neytral = setInterval(function(){
                yellow.style.backgroundColor = "black";
                clearInterval(neytral);
                start();

            }, 3000);
          }
        }, 1000);
      }, 3000);
  }
  }, 1000);
}
}

start();
