function clock() {
  const fullDate = new Date();

  let hours = fullDate.getHours();
  let min = fullDate.getMinutes();
  let secs = fullDate.getSeconds();

  // so that theres a zero in front of the hours: min : secs
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  //because youre trying to connect to the HTML element from JS, you need to use .innerHTML to attach the html element to the JS code. The space in between tags <>space between tags<> is called the innerHTML, which is what were trying to populate.
  // also you can call ids in JS with just quotes, in CS you have to use the # symbol
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ":" + min;
  document.getElementById("second").innerHTML = ":" + secs;
}
//create a function that passes in '0' if the hours/min/secs are < 10

//we use setInterval to set the clock to tick at every second, we pass in our function clock()
setInterval(clock, 1000);
