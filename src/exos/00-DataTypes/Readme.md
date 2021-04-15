# Les types de données

en Javascript il existe 8 types de données dont sept primitifs
- Number
- BigInt (ecmascript 2020)
- String
- Bool
- Object (le seul type non-primitif)
- Symbol
- null
- undefined


## Number 

le systeme de typage dynamic en javascript ne prend pas en compte les int et les float, ce sont tout simplement des types number

2 valeurs specifiques existent chez les numbers :
- infinity
- Nan

Nan est une valeur dite "Sticky"

`myVar = 50 * 'azerty' // NaN`
`myVar + 50 + 35 // Nan`


infinity signifie "superieur à tout"
on peut l'obtenir grace à l'operation suivante : 1/0
une fonction native siFinite() existe afin de savoir si une valeur est infinity ou non

### Infos 

il est possible d'utiliser l'operateur "e" pour gerer les puissance de 10

`myVar = 1e5`
`myVar === 10000`

`myVar = 1e-5`
`myVar === 0.00001`


## String

le type char n'existe pas en javascript

le types de quotes afin de déclarer des variables:
- **Single Quotes** ''
- **Doubles Quotes** ""
- **Backticks** ``

les backticks comportent certaines fonctionalités en plus :
- système de multilignes
- insertion d'expressions via ${}

### les caractères spéciaux 
- \n (retour à la ligne)
- \t (tabulation)
- \ (pour écrire des quotes ou des / afin de ne pas les interpreter on doit les écrire à la suite d'un / )

### longueur d'une string

on obtient la longueur d'une string via la PROPRIÉTÉ length,
length est une propriété et non une fonction

les caractères spéciaux au sein d'une chaine de caractère valent toujours 1 caractère,
autrement appelés **single special character**

`myVar = "/t"`
`myVar.length === 1`

### accéder aux caractères

il est tout à fait possible d'acceder à un seul caractere d'une string

`myVar = 'Hello'`
`myVar.charAt(0) === 'H'`

`myVar[0] === 'H'`

le dernier exemple ci dessus nous laisse penser à juste titre que les string se comportent comme des array on peut donc créer une boucle afin d'acceder à nimporte quelle caractères au sein d'une string.
à noter que les caractères d'une string sont **immuables**

`myVar = 'Aie'`
`myVar[0] = 'P' // aucune erreur est retourné mais pourtant cela n'influera pas sur myVar`
`console.log(myVar) // 'Aie`

### Vocabulaire
- immuable : valeur qui ne change pas et ne peut étre modifié, accessible seulement en lecture et non en écriture


## Bool

le type bool est soit égale à true soit égale a false
très utile dans les if, while ...

## Object

le type object est d'un type dit "non-primitif", car c'est une collection de valeurs.
pouvant contenir des propriétés, des methodes et des prototypes, des notions à éclaircir tout au long de ce cours.

## Symbol

très peu utilisé donc tres peu connue le type Symbol est utilisé dans certaines librairies, dans des codes assez complexes dont celui des moteurs javascript.

un symbol est une valeur unique, aucune autre valeur ne sera égale à cette valeur.
on peut déclarer un symbol grace à la méthode native Symbol()

`myVar = Symbol()`
`myVarTwo = Symbol()`

`myVar === myVarTwo // false`

## null

OUI TOUT A FAIT ! null est un type à part entière !

null s'utilise lorsque c'est incoherent de donner une autre valeur.
null est une valeur dite "non-sticky", elle est égale à 0 au seins des opérations mathematiques (à eviter)

`null + 89 // 89`


## undefined

Tout comme null, undefined est lui aussi un type.
mais il ne s'utilise pas, c'est lorsque l'on declare une variable sans lui assigner de valeur que notre variable sera égale a undefined 

`const myVar`
`console.log(myVar) // undefined`

au sien d'une expression mathématique (à ne pas reproduire) undefined est égale a Nan

`undefined * 22 // Nan`

### infos

### reserved words

certains mots en javascript ne peuvent etre utilisé comme identifiant de variable car étant
considérés comme des **reserved keywords**

** abstract	arguments	await*	boolean break	byte	case	catch char	class*	const	continue debugger	default	delete	do
double	else	enum*	eval export*	extends*	false	final finally	float	for	function goto	if	implements	import* in	instanceof	int	interface let*	long	native	new null	package	private	protected public	return	short	static super*	switch	synchronized	this throw	throws	transient	true try	typeof	var	void volatile	while	with	yield **


## l'operateur typeof

il est possible de vérifier le type d'une variable grace a l'opérateur typeof,
dans tout les cas typeof retournera une chaine de caractères contenant le nom du type de la variable en question

`myVar = "hello"`
`typeof myVar // 'string'`

`typeof null // 'object'`

! drole de comportement sur ce dernier exemple ...
normalement cela devrait nous retourner "null", mais beaucoup de programme ont été codé avec ce default et donc dans un soucis de compatibilité de ces anciens programmes javascript à conservé ce comportement de typeof

`type of console.log() // function`

'function' n'est pas un type de base mais si typeof nous retourne 'function' c'est tout simplement parce que c'est très utile.

## les objets globaux liées au types

les objets globaux sont des objets disponible de base dans javascript et certains concernent uniquement les types de données
- Number
- String
- Bool
- Object
- Symbol

on peut assigner des valeurs à nos variables gràce à ces objets globaux 

`myVar = String()`
`myVar = new String()`

au sein de ces objets globaux il ya de nombreuse methodes et constantes.
ces objets globaux sont etroitement liés au prototypes.

### les conversions manuelles

String()

la conversion en String est plutot simple et sans surprise

`String(123) // "123"`
`String(123.23) // "123.23"`
`String(infinity) // "infinity"`

Number()

`Number(null) // 0`
`Number(undefined) // NaN`
`Number(true) // 1`
`Number(false) // 0`
`Number('456') // 456`
`Number('    ') // 0`
`Number(hello) // Nan`

Bool()

`Bool(null | undefined | 0 | NaN) // false`
`Bool("") // false`
`Bool("...") // true`


## le type coercion

le type coercion est la conversion automatique des types 

### addition vs concatenation

`"azer" + "ty" // azerty`
`"azer" + 56 // azer56`
`"56" + azer // 56azer`
`String(56) + "azer" // 56azer`
`9 + 9 + azerty // 18azerty`
`undefined + "azerty" // undefinedazerty`

durant une addition si une des deux valeurs est une chaine de carateres, js va automatiquement faire une conversion en string
