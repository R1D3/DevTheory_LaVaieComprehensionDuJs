import prompt from 'prompt'
import { schema } from './utils/index.js'

const data = {}
let nbCity = 0

const logPrompt = async () => {
  const prompt = await getPrompt()
  if (prompt) {
    pushData(prompt)
    console.log(data)
  }
}

const getPrompt = async () => {
  prompt.start()
  const { city, temperature } = await prompt.get(schema, ['city', 'temperature'])
  return { city, temperature }
}

const pushData = (prompt) => {
  const { city, temperature } = prompt 
  if (!(city in data)) {
    nbCity++
    data[city] = temperature 
  }
}

logPrompt()