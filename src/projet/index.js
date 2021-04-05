import prompt from 'prompt'
import { schema } from './utils/index.js'

const data = []

const getPrompt = async () => {
  prompt.start()
  const { city, temperature } = await prompt.get(schema, ['city', 'temperature'])
  return [city, temperature]
}

const logPrompt = async () => {
  const prompt = await getPrompt()
  data.push(prompt)
  console.log(data)
}

logPrompt()