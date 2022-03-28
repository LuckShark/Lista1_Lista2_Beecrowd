/* <meta charset="UTF-8">
<br>/algoritmo da questão 1°/<br>

<script>
var PONTO_1 = parseFloat(prompt("escreva um número"));
var PONTO_2 = parseFloat(prompt("escreva outro número"));
var SOMA = PONTO_1+PONTO_2;
document.write(SOMA);
</script>


<meta charset="UTF-8">
<br><br>/algoritmo da questão 2°/<br>

<script>
var r = parseFloat(prompt("insira o raio"));
var A = 3.14*(r*r);
document.write(A);
</script>


<meta charset="UTF-8">
<br><br>/algoritmo da questão 3°/<br>

<script>
var PONTO_1 = parseFloat(prompt("escreva um número"));
var PONTO_2 = parseFloat(prompt("escreva outro número"));
var PRODUTO = PONTO_1*PONTO_2;
document.write(PRODUTO);
</script>

<meta charset="UTF-8">
<br><br>/algoritmo da questão 4°/<br>

<script>
var T = parseFloat(prompt("insira a duração do evento em segundos"));
var HORA = parseInt(T/3600);
var MINUTO = parseInt((T-(HORA*3600))/60);
var SEGUNDO = T-(HORA*3600)-(MINUTO*60);
document.write(HORA+":"+MINUTO+":"+SEGUNDO);
</script>

<meta charset="UTF-8">
<br><br>/algoritmo da questão 5°/<br>

<script>
var capital = parseFloat(prompt("Insira o capital"));
var cem = parseInt(capital/100);
var cinquenta = parseInt((capital-(cem*100))/50);
var vinte = parseInt((capital-(cem*100)-(cinquenta*50))/20);
var dez = parseInt ((capital-(cem*100)-(cinquenta*50)-(vinte*20))/10);
var cinco = parseInt((capital-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10))/5);
var dois = parseInt((capital-(cem*100)-(cinquenta*50)-(vinte*20)-(dez*10)-(cinco*5))/2);
document.write("Notas de 100: "+cem+"<br>");
document.write("Notas de 50: "+cinquenta+"<br>");
document.write("Notas de 20: "+vinte+"<br>");
document.write("Notas de 10 :"+dez+"<br>");
document.write("Notas de 5 :"+cinco+"<br>");
document.write("Notas de 2 :"+dois);
</script>

<meta charset="UTF-8">
<br><br>/algoritmo da questão 6°/<br>

<script>
var idade = parseFloat(prompt("insira a sua idade em em dias"));
var anos = parseInt(idade/365);
var meses = parseInt((idade-(anos*365))/30);
var dias = idade-(anos*365)-(meses*30);
document.write(anos+" anos, "+meses+" meses e "+dias+" dias.");
</script>

<meta charset="UTF-8">
<br><br>/algoritmo da questão 7°/<br>

<script>
var capital = parseFloat(prompt("Insira o capital"));

var Ncem = parseInt(capital/100);
var Ncinquenta = parseInt((capital-(Ncem*100))/50);
var Nvinte = parseInt((capital-(Ncem*100)-(Ncinquenta*50))/20);
var Ndez = parseInt ((capital-(Ncem*100)-(Ncinquenta*50)-(Nvinte*20))/10);
var Ncinco = parseInt((capital-(Ncem*100)-(Ncinquenta*50)-(Nvinte*20)-(Ndez*10))/5);
var Ndois = parseInt((capital-(Ncem*100)-(Ncinquenta*50)-(Nvinte*20)-(Ndez*10)-(Ncinco*5))/2);

var NOTAS = (Ncem*100)+(Ncinquenta*50)+(Nvinte*20)+(Ndez*10)+(Ncinco*5)+(Ndois*2)
var MOEDAS = capital-NOTAS

var Mcem = parseInt(MOEDAS/1);
var Mcinquenta = parseInt((MOEDAS-Mcem)/0.5);
var MvinteECinco = parseInt((MOEDAS-Mcem-(Mcinquenta*0.5))/0.25);
var Mdez = parseInt((MOEDAS-Mcem-(Mcinquenta*0.5)-(MvinteECinco*0.25))/0.1);
var Mcinco = parseInt((MOEDAS-Mcem-(Mcinquenta*0.5)-(MvinteECinco*0.25)-(Mdez*0.1))/0.05);
var Mum = parseInt((MOEDAS-Mcem-(Mcinquenta*0.5)-(MvinteECinco*0.25)-(Mdez*0.1)-(Mcinco*0.05))/0.01);

//notas
document.write("Notas de 100: "+Ncem+"; Notas de 50: "+Ncinquenta+"; Notas de 20: "+Nvinte);
document.write("; Notas de 10: "+Ndez+"; Notas de 5: "+Ncinco+"; Notas de 2: "+Ndois+";<br><br>");
//moedas
document.write("Moedas de 1 real: "+Mcem+"; Moedas de 50 centavos: "+Mcinquenta+"; Moedas de 25 centavos: "+MvinteECinco);
document.write("; Moedas de 10 centavos: "+Mdez+"; Moedas de 5 centavos: "+Mcinco+"; Moedas de 1 centavo: "+Mum+";");
</script>
*/










