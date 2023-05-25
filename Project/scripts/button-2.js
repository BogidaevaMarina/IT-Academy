// Функция для открытия всплывающего окна с формой записи на консультацию
function openConsultationForm() {
  // Создание всплывающего окна
  var popupWindow = window.open('', 'Consultation Form', 'width=400,height=400');

  // Создание элементов формы
  var form = document.createElement('form');

  var fioLabel = document.createElement('label');
  fioLabel.innerHTML = 'Ф.И.О:';
  form.appendChild(fioLabel);
  

  var fioInput = document.createElement('input');
  fioInput.type = 'text';
  fioInput.name = 'fio';
  form.appendChild(fioInput);

  var dateLabel = document.createElement('label');
  dateLabel.innerHTML = 'Дата:';
  form.appendChild(dateLabel);

  var dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'date';
  form.appendChild(dateInput);

  var timeLabel = document.createElement('label');
  timeLabel.innerHTML = 'Время:';
  form.appendChild(timeLabel);

  var timeInput = document.createElement('select');
  timeInput.name = 'time';

  // Добавление вариантов времени
  for (var i = 9; i <= 18; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.text = i + ':00';
    timeInput.appendChild(option);
  }

  form.appendChild(timeInput);

  var phoneLabel = document.createElement('label');
  phoneLabel.innerHTML = 'Телефон:';
  form.appendChild(phoneLabel);

  var phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.name = 'phone';
  form.appendChild(phoneInput);

  var submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.innerHTML = 'ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ';
  form.appendChild(submitButton);

  // Обработчик отправки формы
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получение значений из полей формы
    var fioValue = fioInput.value;
    var dateValue = dateInput.value;
    var timeValue = timeInput.value;
    var phoneValue = phoneInput.value;

    // Ваш код для обработки данных формы (например, отправка на сервер)

    // Закрытие всплывающего окна после отправки формы
    popupWindow.close();
  });

  // Добавление формы на всплывающее окно
  popupWindow.document.body.appendChild(form);
}

// Получение ссылки на кнопку
var buttonEnroll = document.querySelector('.button-enroll');
var buttonRight = document.querySelector('.button-right');


// Добавление обработчика события при клике на кнопку "ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ" (класс "button-enroll")
buttonEnroll.addEventListener('click', function() {
  openConsultationForm();
});

// Добавление обработчика события при клике на кнопку "ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ" (класс "button-right")
buttonRight.addEventListener('click', function() {
  openConsultationForm();
});






