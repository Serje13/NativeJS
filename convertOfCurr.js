/*Конвертер валют. Позволяющий выбрать из доллара (USD), евро (EUR), гривны (UAH) и конвертировать соответственно в доллар, евро или гривну. 
Курс  задает пользователь через prompt;
Показать окно спрашивающее тип валюты, которую хотим 	конвертировать. 
Показать окно спрашивающее тип валюты в которую хотим 	конвертировать.
Если на этапе 3, 4 введены неверные значения, сообщить об этом пользователю через alert.
Если на этапе 3, 4 введены одинаковые значения, сообщить об этом через alert.
Конвертировать валюту и вывести результат перевода из одной валюты в другую,  сообщив оба типа валют и результат.
Отформатировать текстовые поля красиво и максимально гибко.
Вовремя выполнения задания использовать конструкции if(){}else{} и switch(){case{}}
Используя цикл while, do/while модернизировать программу, конвертер валют, так что бы она выполнялась пока пользователь не захочет выйти
*/

var UAH = 1;
var USD;
var EUR;
var whatCur;
var inWhatCur;
var sumUAH;
var sumUSD;
var sumEUR;
var resUAH;
var resUSD;
var resEUR;
var i;

while (i !== false) { 
	USD = (Number(prompt('Задайте курс USD!', 'курс')));
	EUR = (Number (prompt('Задайте курс EUR!' , 'курс')));

  if (USD > 0 && EUR > 0) {  
  	whatCur = (Number (prompt('Какую валюту Вы хотите конвертировать?\nЕсли UAH - нажмите 1;\nЕсли USD - нажмите 2;\nЕсли	EUR - нажмите 3.', 'цифра')));
  	inWhatCur = (Number (prompt('В какую валюту Вы хотите конвертировать?\nЕсли в UAH - нажмите 1;\nЕсли в USD - нажмите 2;\nЕсли в EUR - нажмите 3.', 'цифра')));

		if ((whatCur == 1 || whatCur == 2 || whatCur == 3) && (inWhatCur == 1 || inWhatCur == 2 || inWhatCur == 3)) {
  
			if (whatCur == 1) {
				switch (inWhatCur) {
  
  			case 1:
    		alert('Нельзя конвертировать UAH в UAH!');
    		break;
    
  			case 2:
    		sumUAH = (Number(prompt('Введите сумму UAH, которую Вы хотите конвертировать в USD:', 'сумма')));
    		resUSD = sumUAH / USD;
    		alert('Конвертация UAH в USD = ' + resUSD + 'USD');
    		break;
    
  			case 3:
    		sumUAH = (Number(prompt('Введите сумму UAH, которую Вы хотите конвертировать в EUR:', 'сумма')));
    		resEUR = sumUAH / EUR;
    		alert('Конвертация UAH в EUR = ' + resEUR + 'EUR');
  			break;
    
  			default:
  			break;
    		}
			} 
  		else if (whatCur == 2) { 
  	
  			switch (inWhatCur) {
    
    		case 1: 
   			sumUSD = (Number(prompt('Введите сумму USD, которую Вы хотите конвертировать В UAH:', 'сумма')));
    		resUAH = sumUSD * USD;
    		alert('Конвертация USD в UAH = ' + resUAH + 'UAH');
    		break;
    
  			case 2:
    		alert('Нельзя конвертировать USD в USD!');
    		break;
    
  			case 3: 
    		sumUSD = (Number(prompt('Введите сумму USD, которую Вы хотите конвертировать в EUR:', 'сумма')));
    		resEUR = sumUSD * USD / EUR;
    		alert('Конвертация USD в EUR = ' + resEUR + 'EUR');
 				break;
    
  			default:
  			break;
  			}
			} 
    	else if (whatCur == 3) {

				switch (inWhatCur) {
    
    		case 1: 
    		sumEUR = (Number(prompt('Введите сумму EUR, которую Вы хотите конвертировать В UAH:', 'сумма')));
    		resEUR = sumEUR * EUR;
    		alert('Конвертация EUR в UAH = ' + resEUR + 'UAH');
    		break;
    
    		case 2:
    		sumEUR = (Number(prompt ('Введите сумму EUR, которую Вы хотите конвертировать В USD:', 'сумма')));
    		resUSD = sumEUR * EUR / USD;
    		alert('Конвертация EUR в USD = ' + resUSD + 'USD');
    		break;
    
    		case 3:
    		alert('Нельзя конвертировать EUR в EUR!');
    		break;
    
    		default:
    		break;
    		}
			}
  	} 
  	else {
		  alert('Неправильный ввод!');
		}
  }
  else if (USD < 0 || EUR < 0) {
  	alert('Курс не может быть отрицательным! ');
  }
  else if (USD == 0 || EUR == 0) {
  	alert('Курс не может быть = 0!');
  }
  else {
  	alert ('Неверный ввод!');
  }
	i = confirm('Вы желаете продолжать работу с конвертером валют?');
	}