// Connects calculator keys to the "numberToScreen" function
document.getElementById('calculator-keys').addEventListener('click', numberToScreen)

const display = document.getElementById('calculator-screen')

function numberToScreen (num) {
  // Delete last digit
  const button = num.target.innerHTML
  if (button === 'Del') {
    display.innerHTML = display.innerHTML.slice(0, -1)
  } else if (button === 'AC') {
    display.innerHTML = ''
  } else if (display.innerHTML === '0') {
    display.innerHTML = button
    // Add the pushed digit to the end
  } else {
    display.innerHTML += button
  }
}

// Perform operation on inputted integers
document.getElementById('equal').addEventListener('click', result)
function result () {
  const onscreen = (display.innerHTML)
  display.innerHTML = eval(onscreen)
}
