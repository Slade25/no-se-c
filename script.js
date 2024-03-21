const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'ANGIEEE di que si',
  'Piensalo muy bien',
  'Ahi tienes otro botón',
  'Realmente estas segura?',
  'Creo que esa no es la respuesta correcta eh',
  'Estas 100% segura? 😒',
  'se que tu sabes que es otra la respuesta',
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})