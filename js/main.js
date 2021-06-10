/*var nome = "Bruno";
var idade = 21;
var idade2 = 10;
alert("Seja bem-vindo " + nome + "!"); //pop-up na tela
console.log(idade + idade2);*/

/*var frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
alert(frase.toUpperCase());
alert(frase.toLocaleLowerCase());*/

/////////////////////////////////////////////array
/*var lista = ["uva","laranja","maçã"];
lista.push("limão");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" * "))*/


/////////////////////////////////////////////dicionário
/*var pessoa = {nome: "Ana", idade: 25}
console.log(pessoa)
alert(pessoa.nome)*/

/*var pessoa = [{nome: "Ana", idade: 25}, {nome:"João", idade: 23}]
console.log(pessoa)
alert(pessoa[1].nome)*/

/////////////////////////////////////////////Condicionais
/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Você é maior de idade!");
}else{
    alert("Você é menor de idade!");
}*/

/////////////date
/*var d = new Date();
alert(d.getDay() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());*/

function clicou(){
    //alert("Clicou");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function redirecionar(){
    //window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br";
}

function trocar(documento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   documento.innerHTML = "Obrigado por passar o mouse";
   //alert("trocar texto");
}

function voltar(documento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    documento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function change(elemento){
    alert("Escolheu: " + elemento.value);
}