//bucles

const milista = [2,4,6,8,5]


for (let i=0; i<milista.length; i++){
    //console.log(e)
}

const dobleArray = [];

//for (const e in milista) {
//    let d=milista[e]*milista[e]
//    dobleArray.push(d)
//}

//for (const e of milista) {
//    dobleArray.push(e*e)
//}

milista.forEach((e)=> dobleArray.push(e*e))

//Funciones js

//map
const returnlista = milista.map((e)=>e*e)

//filter

const primo = (n) =>{
    let cont=0
    for (let i = 1; i <= n; i++) {
        if(n%i===0){
            cont++;
        }
    }
    if(cont==2){
        return true
    }
    return false
}
const pares = milista.filter((e)=>primo(e))
console.log(milista)
console.log(dobleArray)
console.log(returnlista)
console.log(pares)

//reduce

//const sumaLista=milista.reduce(function(sum, e){
//    return sum + e 
//},0)

const sumaLista=milista.reduce((sum, e)=> sum+e, 0)

console.log(sumaLista)

//Spread Operator ...

console.log(...milista)

//Op

const array1=[2,3,4]
const array2=[6,8,10]
const arrayR=[...array1,...array2]  
console.log(arrayR)
let name="Pedro"
const arrayN=[...name]
console.log(arrayN[0])