//declarando as variaveis para usuario

let p1=prompt("Digite seu NOME")
let p2=prompt("Digite seu PODER")
let p3=prompt("Digite o nome de um VILÃO")
let p4=prompt("Digite um LUGAR")
let msg=document.getElementById("msg");

msg.innerHTML= `ola ${p1}, o seu poder é ${p2} e voce vai enfrentar o (a) ${p3} no/em ${p4}´`