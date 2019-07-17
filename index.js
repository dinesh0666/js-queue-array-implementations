// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Queue Implementation using Array</h1>`;

var letMeEat = ['Breakfast'];
var count = letMeEat.push('Lunch','Dinner');

console.log(count);

var firstMealOfTheDay = letMeEat.shift();//removing first item

console.log(firstMealOfTheDay);

letMeEat.unshift(firstMealOfTheDay);//adding the item at first postions

console.log(letMeEat);