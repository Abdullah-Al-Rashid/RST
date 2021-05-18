const screen = document.getElementById('calculator-screen')

// Connects calculator keys to the "numberToScreen" function
document.getElementById('calculator-keys').addEventListener('click', numberToScreen)
function numberToScreen (num) {
  // Delete last digit
  const button = num.target.innerHTML
  if (button === 'Del') {
    const screen = (screen.innerHTML)
    screen.innerHTML = onScreen.slice (0, -1)
  } else if (button === 'AC') {
    const screen = (screen.innerHTML)
    screen.innerHTML = onScreen.slice (0, -40)
  } else if (screen.innerHTML === '0') {
    screen.innerHTML = button
  // Add the pushed digit to the end 
  } else {
    screen.innerHTML += button
  }
}

document.getElementById('equal').addEventListener('click', result)
function result () {
  const onscreen = (screen.innerHTML)
  // Perform operation on inputted integers
  screen.innerHTML = eval(onscreen)
}
