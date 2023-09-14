console.log('76')
const firstName = 'Элина'
const age = '23'
let maritalStatus = 'холост' 
let nationality = 'татарка'
const city ='Кемерово'

console.log ('Имя: ' + firstName, 'Возраст: ' + age, 'Семейное положение: ' +maritalStatus, 'Национальность: '+nationality,
'Город: '+city)
console.log (`Имя: ${firstName} Возраст: ${age} Семейное положение: ${maritalStatus} Национальность: ${nationality}
Город: ${city}`)

console.log('77')
let x = 5
let y = 10
console.log (y ** x)
console.log (x*=3, y/=y)

console.log('79')
if (age >=18) console.log('Вы совершеннолетний')
else console.log('Вам еще нет 18')

age >=18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')

console.log('80')

console.log('1.For')
for (let i = 2; i <= 12; i+=2){
  console.log(i)
}
console.log('2.For')
for (let i = 10; i >= 1; i--){
  console.log(i)
}

let i = 0;
console.log('1.While')
while(i < 12){
  console.log(i+=2)
}

i = 10;
console.log('2.While')
while(i >= 1){
  console.log(i--)
}

console.log('81')
const numbers = [3,6,8,4,8,3,10,22,45,37,22]
for (let i = 0; i<numbers.length; i++){
  if (numbers[i] % 2 == 0 )
  console.log(numbers[i])
}

const colorsOfRainbow = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый']
for (let i = colorsOfRainbow.length - 1; i>=0; i-- ){
  console.log(colorsOfRainbow[i])
}

console.log('82.1')

function helloPerson (firstName){
return `Hello, ${firstName}`
}

console.log(helloPerson('Элина'))


console.log('82.2')
// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. 
// Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.
let numbersTwo = [33,66,8,34,84,35,10,25,45,39,22]

function numberIsTen(array){
for (let i=0; i<array.length; i++){
  if (array [i] > 10) 
  console.log(array [i]) 
}
}
numberIsTen(numbersTwo)

console.log('82.3')
//3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, 
// два числа и строку для выбора оператора. При вызове функции пользователь передает, например, 
// (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. 
// То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в 
// переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, 
// умножение и деление.

function calculate (x, y, operation){
  switch (operation) {
    case 'minus':
      console.log(x-y);
      break;
    case 'plus':
      console.log(x+y);
      break;
    case 'multiplication':
      console.log(x*y);
      break;
    case 'division':
      console.log(x/y);
      break;
    default:
      alert('Проверьте введенные данные');
  }
}
calculate (5, 10, 'division')
