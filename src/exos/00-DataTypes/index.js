import prompt from 'prompt'

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
  const result = String(sum)
  return result
}

getPrompt().then((result) => {
  console.log(result)
})