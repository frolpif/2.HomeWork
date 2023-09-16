console.log('83')
const user = {
  firstName: 'Элина',
  age: 23,
  maritalStatus: 'холост' ,
  nationality: 'татарка',
  city: 'Кемерово',
  sayHello(name){
    return (`Hello ${name}`)
  }
}
console.log(user.sayHello('Элина'))

const users = [
{
  name: 'Элина',
  age: 23,
  isAdmin: true
},
{
  name: 'Аня',
  age: 55,
  isAdmin: false
},
  {
  name: 'Вера',
  age: 75,
  isAdmin: false
  },
]

let numberOfUsers = 0

for (let i=0; i<users.length; i++){
  if (users[i].isAdmin == false) 
    numberOfUsers++
}
console.log(numberOfUsers)


