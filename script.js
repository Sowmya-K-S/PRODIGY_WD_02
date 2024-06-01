// Function to change mode

let mode_div = document.querySelector(".mode-change");
let mode = document.querySelector("#mode");


function setMode(mode) {
    localStorage.setItem('mode', mode);
  }
  
  // Function to retrieve the mode from localStorage
  function getMode() {
    return localStorage.getItem('mode');
  }
  
  // Function to apply mode based on stored mode
  function applyMode() {
    let storedMode = getMode();
    console.log(storedMode)
    if (storedMode === 'dark' || storedMode === 'null' ) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }
  
  // Function to enable dark mode
  function enableDarkMode() {
    mode.classList.remove("bx-moon");
    mode.classList.add("bx-sun");
    document.documentElement.style.setProperty('--primary-bg-color', '#000');
    document.documentElement.style.setProperty('--primary-font-color', '#fff');
    document.documentElement.style.setProperty('--primary-b1', '#f95150');
    document.documentElement.style.setProperty('--primary-b2', '#1b3481');
    document.documentElement.style.setProperty('--primary-b3', '#0B5345');

    setMode('dark'); // Store the mode
  }
  
  // Function to enable light mode
  function enableLightMode() {
    mode.classList.remove("bx-sun");
    mode.classList.add("bx-moon");
    document.documentElement.style.setProperty('--primary-bg-color', '#fff');
    document.documentElement.style.setProperty('--primary-font-color', '#000');
    document.documentElement.style.setProperty('--primary-b1', '#F4D03F');
    document.documentElement.style.setProperty('--primary-b2', '#2ECC71');
    document.documentElement.style.setProperty('--primary-b3', '#E67E22');

    setMode('light'); // Store the mode
  }
  
  // Event listener for mode changer
  mode_div.addEventListener('click', function () {
    if (mode.classList.contains("bx-moon")) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  });
  
  // Apply mode on page load
  applyMode();
  


  //function to change time

  let interval0, interval1, interval2, interval3
  let start_button = document.querySelector(".start")
  let second = document.querySelector('.second')
  let minute = document.querySelector('.minute')
  let hour = document.querySelector('.hour')
  let millisecond = document.querySelector('.millisecond')


  function changeTime()
  {

    //changing button text and class
    start_button.classList.remove('start')
    start_button.classList.add('stop')
    start_button.innerText = 'Stop'


    //changing time

    //changing milliseconds
    interval0 = setInterval(() => {
      if(Number(millisecond.innerText)<9)
        millisecond.innerText = "0" +  String(Number(millisecond.innerText)+1)
      else
        millisecond.innerText = String(Number(millisecond.innerText)+1)
    }, 100)


    //changing seconds

     interval1 = setInterval(() => {

        millisecond.innerText = "00"

        if(Number(second.innerText)<9)
            second.innerText = "0" + String(Number(second.innerText)+1)
        else
            second.innerText = String(Number(second.innerText)+1)
     },1000)

    
     //change minutes
     interval2 = setInterval(() => {

            millisecond.innerText = "00"
            second.innerText = "00"
            
            if(Number(minute.innerText)<9)
                minute.innerText = "0" + String(Number(minute.innerText)+1)
            else
                minute.innerText = String(Number(minute.innerText)+1)

     },60000)


     //changes hours
     interval3 = setInterval(() => {

        second.innerText = "00"
        minute.innerText = "00"

        if(Number(hour.innerText)<9)
            hour.innerText = "0" + String(Number(hour.innerText)+1)
        else
            hour.innerText = String(Number(hour.innerText)+1)

      },360000)

}

function stopChangeTime()
{
    //changing button text and class
    start_button.classList.remove('stop')
    start_button.classList.add('start')
    start_button.innerText = 'Start'
    
    clearInterval(interval0)
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
}



start_button.addEventListener('click', function() {
  if (start_button.classList.contains("stop")) {
      stopChangeTime();
  } else {
      changeTime();
  }
});


//function to split
let split_button = document.querySelector('.split')
function splitTime()
{
  //extract the time

  //create a element and throw it on to front end
}

split_button.addEventListener('click',splitTime)


//function to reset

let reset_button = document.querySelector('.reset')
function restTime()
{
  // to bring the button and time to initial state

  //clearing intervals
  clearInterval(interval0)
  clearInterval(interval1)
  clearInterval(interval1)
  clearInterval(interval2)
  clearInterval(interval3)

  //changing button text and class
  start_button.classList.remove('stop')
  start_button.classList.add('start')
  start_button.innerText = 'Start'

  // setting text to initial value
  second.innerText = '00'
  minute.innerText = '00'
  hour.innerText = '00'
  millisecond.innerText = '00'
}

reset_button.addEventListener('click',restTime)



  