function createGlobal(prop, val) {
  if(!prop || !val) {
    return
  }
  globalThis[prop] = val
}

createGlobal('test', true)

console.log(globalThis.test)