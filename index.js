//Variables y constantes
var variable=""
let $miVariable=0
let _otraVariable=false
variable="sdsf"
//Constantes
const PI=3.1416

//Operadores matematicos
/*
 + , - , *, /, %, **, ++, -- */

let a=10,b=2;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//Operadores de comparacion
// > <  >=   <=  == === != !==
r = (3=="3")
console.log(r)

//Operadores logicos
//and &&  or ||  not ! 

//Estructuras de decision 

if (a == "10" && b == "3"){
    console("Verdad")
}else if (b===2){
    console.log("else")
}else{
    
    console.log("otro mensaje")
}

switch (a) {
    case "10": case "3": case "2":
        
        console.log("Instructura")
        break
    case "1":
        console.log("Instructura")
        break
    default:
        console.log("default")
        break    
}


let z=null
let g = ["key",3]

console.log(typeof(g))
console.log(typeof(z))

//Estructuras repetitivas
//for, while, do while, foreach, for of

//hoisting
//Funciones
saludo()

function saludo(){
    console.log("Hola saludos")   
}

function suma(a,b){
    return a + b
}

const suma1=function(a,b){
    return a + b
} 
//Funciones flecha
const suma2=(a,b)=>a + b
const j=[4,6]
j.push(8)

for (let j=1;j<=5;j++){
    console.log(j)
}

console.log(suma(8,3))
console.log(suma1(8,3))
console.log(suma2(8,3))

let miArray= new Array();
miArray.push(2,3,3,3,3)
miArray[miArray.length]=10
console.log(miArray[5])
let otroArray= [suma1,suma,3,4, true,"HOla", {d:1}, [3,4,5],"😍"]
const f1 = otroArray[0]
otroArray.push(f1(3,4))

console.log(f1(3,4))
otroArray.pop()
console.log(otroArray)