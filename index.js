function print_current_page(){
  window.print();
}

let str = "w3resource";
function rotate(str){

}
//LEAP YEAR
function checkLeap(year){
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}
console.log( checkLeap(2024) );

function checkLeapNew(year){
  const date = new Date(year, 1, 29).getDate() === 29;
  if (date){
    console.log(year + ' is a leap year');
  }else {
    console.log(year + ' is not a leap year');
}
}
console.log(checkLeapNew(2022));

// 1st jan Sunday
for (let year = 2014; year <= 2050; year++)
{
  let date = new Date(year, 0, 1);
  if (date.getDay() === 0){
    console.log("1st January is being a Sunday " + year);
  }
}


// const numb_comp = Math.floor(Math.random()*10)+1;
// console.log(numb_comp);
// // const numb_user = prompt("Enter your number");
// if (numb_comp === numb_user){
//   console.log("Good Work");
// }else{
//   console.log("Not matched");
// }

// from CELSIUM to FARENG
function celToFar(celcium){
var tempC = celcium;
var fareng = (1.8*tempC + 32);
var message = tempC + '\xB0C is ' + fareng + '\xB0F';
console.log(message);
}
function farToCell(fareng){
  const tempF = fareng;
  const celsium = ((tempF - 32)/1.8);
  const message = `${tempF}\xB0F is ${celsium}\xB0C.`;
  console.log(message);
  }
celToFar(60);
farToCell(45);

var var_name = "abcd";
var n = 120;
this[var_name] = n;
console.log(this[var_name]);

filename = "system.php";
console.log(filename.split(".").pop());
