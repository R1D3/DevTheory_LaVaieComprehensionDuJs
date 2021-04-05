export const schema = {
  properties: {
    city: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'City must be only letters, spaces, or dashes',
      required: true
    },
    temperature: {
      pattern: /^[0-9]+$/,
      message: 'Temperature must be only numbers',
      required: true
    }
  }
}
