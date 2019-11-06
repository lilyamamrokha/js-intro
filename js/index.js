//Ключові слова для змінних:
//var(не використовуємо), let, const
//let message = 'Hello!';
//alert(message);
//message = 'World';
//alert(message);

//const year = 2019; //цифри без лапок
//alert(year);
//назви без пробілів
//const nextYear = year + 1;
//message = 'Next year will be ' + nextYear;
//alert(message);

const userName = prompt('Enter your name');
alert('Hello ' + userName);

const userAge = parseFloat(prompt('Enter your age'));
const nextAge = addOne(userAge);
alert(nextAge);

if (userAge < 18) {
    alert('You are not adult!');
} else {
    alert('You are adult!');
}

function addOne(num) {
    const result = num + 1;
    return result;
}


//all scalar data type in js:
//String
//Number
//Boolean
//undefined
//null
//object
//symbol