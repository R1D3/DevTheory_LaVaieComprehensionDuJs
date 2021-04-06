import prompt from 'prompt'
// Créer un programme qui envoie la moitié d'un nombre, reçu de la part de l’utilisateur.
// Ce qui est renvoyé doit obligatoirement être composé de chiffres
const schema = {
  properties: {
    value: {
      pattern: /^[0-9]+$/,
      message: 'value must be only numbers',
      required: true
    }
  }
}

const getPrompt = async (isWrong = false) => {
  prompt.start()
  const { value } = await prompt.get(schema, 'value')
  const number = Number(value)
  const sum = number / 2
  return sum
}

getPrompt().then((result) => {
  console.log(result)
})