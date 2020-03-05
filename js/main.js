var nome = 'Marcos Wlrich'
var n1 = 25;
var n2 = 5
//alert('Hello Word ' + nome);
console.log(nome);
console.log(n1 + n2);

// Variaveis

var peso = 56.70;
var humano = true;
var alunos = ['Mateus', 'Diego', 'Marcos']
alunos.push('Maria');  // add na lista
alunos.pop(); // retira o ultimo da lista
console.log(alunos.length);
console.log(alunos.reverse());
console.log(alunos.toString());
console.log(alunos.join(' - '));
var aluno = {
    nome: 'diego',
    idade: 23,
    peso: 80.5,
    humano: true,
};
 console.log(alunos);
 console.log(aluno.peso);

 // Operações matemáticas

 var x =10, y = 5;
 x = x + 3
 x += 2
 console.log(x,y);
 console.log(x + y);
 console.log(x - y);
 console.log(x / y);
 console.log(x * y);
 console.log(x % y);

 //Funções

 function soma(num1, num2){
     var resultado = num1 + num2;

     return resultado;
 }
 var resultado = soma(2,2);
 console.log(resultado);

 // condições, laços de repetição e Date

 /*var idade = prompt('Qual a sua idade: ');
 if (idade >= 18){
     alert('Maior de idade');
 }else{
     alert('Menor de idade');
 }
 
*/
/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}   
*/
var count;
for(count = 1; count <= 5; count++){
    console.log(count);
}

var d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);
 


