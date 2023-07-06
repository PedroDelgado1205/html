const btn=document.getElementById("btn");
const lista=document.getElementById("id_lista")
const miLista=[]
const actual=new Date()


function agregar(){
    // let name=document.getElementById("id_name").value
    // let ape=document.getElementById("id_ape").value
    // let year=document.getElementById("id_year").value
    // let name=document.querySelector("#id_name").value
    let todos=document.querySelectorAll("input")
    let name=document.querySelector("#id_name").value
    let ape=document.querySelector("#id_ape").value
    let year=document.querySelector("#id_year").value
    let edad = actual.getFullYear() - year
    miLista.push(`<li> hola ${name} ${ape}, usted tine ${edad} años</li>`)
    items()
    console.log(todos)
    todos[0].style.backgroundColor="red"
}



function items(){
    let html=""
    for (const i of miLista) {
        html+= i
    }
    lista.innerHTML=html;
} 
