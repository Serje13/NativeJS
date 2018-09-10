/*Библиотека. Создать массив хранящий в себе (объекты) книги разбитые по категориям (Фантастика, Сказки, Триллеры). 
Каждая из категорий хранит в себе 4 книги. 
Книга представляет собой объект со свойствами (название, автор, кол-во страниц, жанр)*/
var library = [];

function  Book(name, author, genre, pages) {
  this.name = name;
  this.author = author;
	this.genre = genre;
	this.pages = pages;
}

function Category(name) {
  this.name = name;
}
library.category1 = new Category('Fantasy');
library.category2 = new Category('Stories');
library.category3 = new Category('Thriller');

library.category1.book1 = new Book('Нет, детка, это - фантастика!', '	Екатерина Васина, Анна Селина',' Фантастика ', 	416);
library.category1.book2 = new Book('Будущее вещей: Как сказка и фантастика становятся реальностью', '	Дэвид Роуз',' Фантастика ', 	344);
library.category1.book3 = new Book('Когда отступает фантастика', '	Новомир Лысогоров',' Фантастика ', 	256);
library.category1.book4 = new Book('Фантастика ( 1968 )', 'Дмитрий Биленкин',' Фантастика ', 	352);

library.category2.book1 = new Book('Волшебный кролик', 'Сью Бентли','Сказки ', 128);
library.category2.book2 = new Book('Говорящий цветок', 'Лили Смолл','Сказки ', 128);
library.category2.book3 = new Book('Волшебный пони, или Вперёд, Метеор!', 'Сью Бентли','Сказки ', 128);
library.category2.book4 = new Book('Когда прилетит комета', 'Туве Янссон','Сказки ', 192);

library.category3.book1 = new Book('Все ее страхи!', 'Питер Свенсон','Триллер', 	320);
library.category3.book2 = new Book('Втрачений символ', 'Д. Браун','Триллер', 	608);
library.category3.book3 = new Book('Кладовище домашніх тварин', 'С. Кінг','Триллер', 	400);
library.category3.book4 = new Book('Асистент', 'Т. Ґеррітсен','Триллер', 	368);
console.log(library );