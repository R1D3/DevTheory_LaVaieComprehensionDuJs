
const obj = {
  text: true,
  tete: 45,
  Infinity: true,
  ['a b']: 45
}

// ecrire une fonction qui retourne le nombre de propriétes de type string
const countPropString = (obj) => {
  let i = 0
  for (let prop in obj) {
    if(typeof obj[prop] === 'string') {
      console.log(prop)
      i++
    }
  }
  return i
}

// ecrire une fonction qui supprime les propriétés contenant un espace dans leur nom
const deletePropWithEscape = (obj) => {
  for (let prop in obj) {
    if(typeof prop == 'string') {
      const count = prop.split(' ')
      if (count.length > 1) {
        delete obj[prop]
      }
    }
  }
}
