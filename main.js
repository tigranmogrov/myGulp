// let randomBody = ['глаз', 'нос', 'череп'];
// let randomAdjectivs = ['вонючка', 'унылая', 'дурацкая'];
// let randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];
// let randomPart = randomBody[Math.floor(Math.random() * randomBody.length)];
// let randomAdjectiv = randomAdjectivs[Math.floor(Math.random() * randomAdjectivs.length)];
// let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// let randomResult = ['У тебя', randomPart, 'словно',
//     randomAdjectiv, randomWord + '!!!'].join(' ');
// console.log(randomResult);
//
// for (i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + ' =  red last' + "</br>");
//     }
// };
//
//let rex = 0;
//while (rex < 10) {
//    rex++;
//    if (rex % 2 !== 0) {
//        document.write(rex + "</br>");
//    }
//
//}
//for(i = 2; i <= 10; i++){
//   if( i % 2 === 0){
//       console.log(i);
//   }
//}
//
////let num;
////
////do {
////  num = prompt("Введите число, большее 100?", 0);
////} while (num <= 100 && num);
////let money = prompt("Ваш бюджет на месяц?", ''),
////	time = prompt('Введите дату в формате YYYY-MM-DD', '');
////
////let appData = {
////	budget: money,
////	expenses: {},
////	optionalExpenses: {},
////	income: [],
////	timeData: time,
////	savings: false
////};
////
////let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
////	a2 = prompt("Во сколько обойдется?", ''),
////	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
////	a4 = prompt("Во сколько обойдется?", '');
////
////appData.expenses.a1 = a2;
////appData.expenses.a3 = a4;
////alert(appData.budget / 30);
////console.log(appData.expenses);
////
////let money = prompt('Ваш бюджет на месяц?', '');
////let time = prompt('Введите дату YYY-MM-DD', '')
////let appData = {
////    budget: money,
////    timeData: time,
////    expenses: {},
////    optionalExpenses: {},
////    income: [],
////    savings: false
////};
////let question1 = prompt('Обязательная статья расходов','');
////
////let question2 = prompt('Во сколько обойдется?','');
////
////let question3 = prompt('Обязательная статья расходов','');
////
////let question4 = prompt('Во сколько обойдется?','');
////
////appData.expenses.question1 = question2;
////appData.expenses.question3 = question4;
////alert(appData.budget / 30);
////console.log(appData.expenses.question1);
//let name = prompt('Какое «официальное» название JavaScript?','');
//if(name === 'ECMAScript'){
//    alert('good')
//}
//else{
//    alert('bad')
//};
//let num = prompt('you number',0);
//if(num > 0){
//    alert(1);
//}
//else if (num < 0){
//    alert(-1);
//}
//else{
//    alert(0);
//};
let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';



