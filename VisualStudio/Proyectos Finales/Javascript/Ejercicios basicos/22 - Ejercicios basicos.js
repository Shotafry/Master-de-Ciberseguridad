const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

const novegan = []
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    novegan.push(i)
  }
}

for (let i = 0; i < novegan.length; i++) {
  if (i < fruits.length) {
    foodSchedule[novegan[i]] = { name: fruits[i], isVegan: true }
  }
}

console.log(foodSchedule)
