function bt(){
let playerFirst = document.getElementById('inputFirst').value;
console.log(playerFirst);
}
bt();
function btnTwo(){
let playerTwo = document.getElementById('inputTwo').value;
let playerFirst = document.getElementById('inputFirst').value;
console.log(playerTwo);
console.log(playerFirst);
if(playerTwo == playerFirst){
	alert("Ты угадали!");
}
else if(playerTwo > playerFirst){
	alert("Ты ввёл больше, чем нужно!")
}
else if(playerTwo < playerFirst){
	alert("Ты ввёл меньше, чем нужно!")
}
else{
	alert("Ошибка!");
}
}
