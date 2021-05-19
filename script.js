// Connects calculator keys to the "numberToScreen" function
document.getElementById('calculator-keys').addEventListener('click', numberToScreen)

const display = document.getElementById('calculator-screen')

function numberToScreen (num) {
  // Delete last digit
  const button = num.target.innerHTML
  if (button === 'Del') {
    const display = (display.innerHTML)
    display.innerHTML = display.slice(0, -1)
  } else if (button === 'AC') {
    const display = (display.innerHTML)
    display.innerHTML = display.slice(0, -40)
  } else if (display.innerHTML === '0') {
    display.innerHTML = button
    // Add the pushed digit to the end
  } else {
    display.innerHTML += button
  }
}

document.getElementById('equal').addEventListener('click', result)
function result () {
  const onscreen = (display.innerHTML)
  // Perform operation on inputted integers
  display.innerHTML = eval(onscreen)
}
