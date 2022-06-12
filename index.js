let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Кнопка"; //изменяем текст кнопки
tg.MainButton.setText("Кнопка активна"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#52e588"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показана
		tg.MainButton.hide() //скрываем кнопку
	}
  else{ //иначе
  	tg.MainButton.show() //показываем
  }
});

let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isActive){ //если кнопка показана
		tg.MainButton.color = "#552950"; //меняем цвет
		tg.MainButton.setText("Кнопка деактивирована"); 
		tg.MainButton.disable() //скрываем кнопку
	}
	else{ //иначе
		tg.MainButton.color = "#52e588"; //меняем цвет
		tg.MainButton.setText("Кнопка активна"); 
		tg.MainButton.enable() //показываем
	}
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send");
	//при клике на основную кнопку отправляем данные в строковом виде
});

let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем
