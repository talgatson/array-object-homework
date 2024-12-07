//1th task
let weatherUser = prompt("Какое время суток? (утро, день, вечер)");

if (weatherUser.trim().toLowerCase() == "утро") {
    alert("Доброе утро! Попейте кофе!");
} 
else if (weatherUser.trim().toLowerCase() == "день") {
    alert("Доброе день! Попейте чай!");
}
else if (weatherUser.trim().toLowerCase() == "вечер") {
    alert("Доброе вечер! Попейте горячий шоколад!");
}
else { 
    alert("Вы ввели некорректные данные!")
}
//2nd task
const data = {
    name: prompt("Введите ваше имя!"),
    age: parseInt(prompt("Введите ваш возраст!")),
    subject: prompt("Введите ваш предмет"),
    grade: prompt("Введите вашу оценку")
};
console.log(data.age+5);
//3rd task
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];
console.log(movies[1].director);
console.log(movies[3].genre);
//4th task
let list = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
list.unshift("кофе");
list.pop();
list.splice(2, 1, "груши", "помидор");
console.log(list);
