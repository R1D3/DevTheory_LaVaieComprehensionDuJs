# les comportement clés du code

## bindings

un bindings est le fait de lier un identifiant à une valeur.

cette valeur peut etre:
- types primitifs
- reference objet
- function
- array
- class

## le scope

le scope se defini comme étant la portée des bindings.
le scope se défini en fonction des blocks, a chaque { } crée dans le code cela crée un nouveaux block est crée.

```
let rate = 9
if (rate >= 7) {
  let reviewType = 'happy'
  console.log(`${reviewtype} review`) // happy review
}

console.log(reviewtype) // retourne une erreur comme quoi reviewType est undefined
```

### bindings local vs bindings local

```
let rate = 9 // bindings global
if (rate >= 7) {
  let reviewType = 'happy' // bindings local
  console.log(`${reviewtype} review`)
}

console.log(reviewtype) // undefined
```

il y a 2 types d'instanciation qui vont forcer un bindings global:
- `var keyword =`
- `function keyword()`

## let

le binding de type let est disponible dans le scope local et biens sur dans les scope enfants du scope local mais il est indisponible dans les block parents

```
let myRate

function showRate(rate) {
  let myRate = rate
  console.log(myRate) // 8
  console.log(rate) // 8
}

myRate = 9
showRate(8)
```

sur le code ci dessus, deux variable du méme nom ont été déclaré mais il n'y a aucune erreur,
c'est justement la le concept de *** shadowed variables ***, lorsque le scope des deux variables est different il n'y aucun soucis a créer des bindings avec le même identifiant

```
let myRate

function showRate(rate) {
  console.log(myRate) // 9
  console.log(rate) // 8
}

myRate = 9
showRate(8)
```

dans l'exemple ci dessus, nous avons supprimé la variable let myRate dans le scope de la function, de ce fait lorsqu'on affiche myRate en premier lieu Javascript va verifier si une varibale myRate existe dans le scope present si non, il va rechercher la même chose dans le scope précedent et ainsi de suite jusqu'a retrouver la viariable, si rien n'est trouvé il renverra une erreur.

## const

const est une instanciation de bindings qui a pour spécificité de bloquer la redifinition de valeur.
pourtant sous forme d'objet ou d'array il est possible d'ajouter ou supprimer des elements au seins de cette const sans pour autant que javascript nous retourne une erreur.
l'instanciation via const a seulement pour but de bloquer l'expression '='.

const myObject = { popo: true }
myObject.pipi = true
console.log(myObject) { popo: true, pipi: true }
myObject = { pupu:  true } // la Javascript va retourner une erreur par rapport a la redefinition d'une const


## var

a l'instant ou l'on declare un var, ce bindings sera disponible dans l'emsemble du code global

```
console.log('1 ' + whyDoIExist) // 1 undefined
if (whyDoIExist) {
  var whyDoIExist = true
}
console.log('2 ' + whyDoIExist) // 2 undefined
```

Dans le code ci dessus aucune erreur n'est retourné pourtant WhyDoIExist n'est pas defini en debut de code. 
mais lorsque javascript declare un var quelque part il est disponible dans le scope global et donc egale a undefined tant que la declaration de la var en question n'est pas atteinte dans le code


```
var legolas = true 

funciton youShallNotPass() {
  var gandalf = true
}

console.log(legolas) // true
console.log(gandalf) // Error gandalf is not defined
```

par contre déclarer dans une fonction, une var ne sera pas disponible dans le code global mais uniqement dans la fonction

drole de comportement ...par convention il ne vaut mieux pas utiliser var, seulement let et/ou const car leur comportement est previsible et claire.

##  l'objet global 

l'objet global c'est le conteneur de tous nos bindings globaux, un objet qui vas contenir l'ensemble de nos bindings globaux.

en Node js l'objet global s'apelle globalThis
en Web c'est l'objet window qui represente notre objet global

par exemple console.log() est une variable global native, on pourrait tres bine y acceder avec l'objet globalThis

tout les objets globaux sont des propriétes de globalThis et vice-versa

```
console.log('ok') // ok
globalThis.console.log('ok') // ok
```

 un exemple du comportement de var, ne pas oublier que si declarer dans une fonction var ne sera pas disponbile dans le scope global et donc pas déclaré dans globalThis

```
var myVar = 'hey'
let myVar2 = 'hey'
globalThis.myVar // hey
globalThis.myVar2 // undefined
```

encore une raison suplementaire d'utiliser uniquement let et const 