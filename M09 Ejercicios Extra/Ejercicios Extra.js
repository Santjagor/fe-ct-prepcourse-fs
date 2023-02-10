/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo = []
   for (prop in objeto) {
      arreglo.push([prop, objeto[prop]])
   }
   return arreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arrString = string.split("")
   let objeto = {}
   for (let i = 0; i < string.length; i++) {
      if (!objeto.hasOwnProperty(arrString[i])) {
         objeto[arrString[i]] = 1
      } else {
         objeto[arrString[i]]++
      }
   }
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arr = string.split("")
   let mayusculas = []
   let letra = ""

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i].toUpperCase()) {
         letra = arr[i]
         delete arr[i]
         mayusculas.push(letra)
      }
   }

   mayusculas = mayusculas.join("")
   arr = arr.join("")
   return mayusculas + arr
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let fraseSeparada = frase.split("")
   let palabra = []
   let fraseInvertida = ""

   for (let i = 0; i < fraseSeparada.length; i++) {
      if (fraseSeparada[i] != " " && i != fraseSeparada.length - 1) {
         palabra.push(fraseSeparada[i])
      } else if (fraseSeparada[i] == " " || i == fraseSeparada.length - 1) {
         if (i == fraseSeparada.length - 1) {
            palabra.push(fraseSeparada[i])
         } else {
            palabra.unshift(" ")
         }
         palabra.reverse()
         fraseInvertida += palabra.join("")
         palabra = []
      }
   }

   return fraseInvertida
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   if (String(numero) == String(numero).split("").reverse().join("")) {
      return "Es capicua"
   } else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringSeparado = string.split("")
   for (let i = 0; i < stringSeparado.length; i++) {
      if (stringSeparado[i] == "a" || stringSeparado[i] == "b" || stringSeparado[i] == "c") {
         delete stringSeparado[i]
      }
   }
   return stringSeparado.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function (a, b) {
      return a.length - b.length
   })
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = []
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         arr.push(array1[i])
      }
   }
   return arr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
