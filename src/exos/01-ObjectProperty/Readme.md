# les proprétés d'objets

## declaration de propriétés 

```
const obj = { a: 5}
console.log(obj) // { a: 5 }

obj['b'] = 8
console.log(obj) // { a: 5, b: 8 }

obj[Infinity] = false
console.log(obj) // { a: 5, b: 8, Infinity: false }
```

Avec la syntaxe [] il est possible de nommer des propriétés avec des epspace et autres caracteres speciaux 

'''
obj["a b"] = true
console.log(obj) // { a: 5, b: 8, Infinity: false, a b: true}
'''

## nommage de propriétés via une variable

```
const obj = { a: 5 }
const text = 'cool'
obj[text] = true
console.log(obj) // { a: 5, cool: true }
```

il est aussi possible de le faire a la création de l'objet

```
const text = 'cool'
const obj = { a: 5, [text] : true }
console.log(obj) // { a: 5, cool: true }
```
grace au type coercion il est aussi possible de faire la meme chose et de concatener une autre chaine de caracteres cela peut etre utile dans une boucle par exemple.

```
const text = 'id_'
const obj = {}

for (let i=0;i<3;i++) {
  obj[text+i] = true
}

console.log(obj) // { id_0: true, id_1: true, id_2: true }
```

Ces propriétés nommé via d'autres variables externe à l'objet sont appelées ***computed properties***

avec la syntaxe [] il est possible de nommer ses propriétés comme on le souhaite, il n'y a donc pas de reserved words concernant les objets néanmoins il y à bien un cas spécifique le nom ***__proto__***, lié au prototypes d'objets nous en saurons un peu plus tout au long de ce cours.

### le cas Symbol 

```
const sym = Symbol()
const obj = {}
obj[sym] = 'cool'

console.log(obj) // { Symbol(): 'cool' } 
console.log(obj['Symbol()']) // undefined 
console.log(obj[Symbol()]) // undefined
console.log(obj[sym]) // 'cool'
```

il est possible d'acceder a une propriété nommé via un Symbol() uniquement avec la variable contenant le symbol lui meme

### raccourci de definition propriétés valeur 

```
const text = 'cool'
const obj = {[text]: true, text }
console.log(obj) // { cool: true, text: 'cool' }
```

### delete

il est possible de supprimer complètement une propriéte d'un objet grace à l'opérateur delete

```
const obj = { a: 1, b: 2 }
delete obj.b
console.log(obj) // { a: 1 }
```

### test d'existence avec in

il est possible de verifier si un nom de propriété existe dans un objet avec l'opérateur in

```
const obj = { text: 'okay' }

'text' in obj // true
```

il est possible de boucler l'objet avec l'operateur in 

```
const obj = { a: 1, b: 45 }
for (let prop in obj) {
  console.log(prop) // affiche les nom de propriétes de l'objet
  console.log(obj[prop]) // affiche la valeur de chaque propriétés de l'objet
}
```
il est aussi possible de l'utiliser dans des conditions 

```
const obj = {cool : true}
const myVar = 'cool'

if (myVar in obj){
  ...
}

if (!(myVar in obj)){
  ...
}
```
### l'ordre des propriétés dans une boucle

les propriétés numériques d'abord, par ordre croissant ensuite les autres propriétés par ordre de création, la valeur de chaques propriétés n'influe pas sur l'ordre de classement des propriétés.
