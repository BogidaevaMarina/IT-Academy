
function openConsultationForm() {
 
  var popupWindow = window.open('', 'Consultation Form', 'width=400,height=400');

 
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

  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    var fioValue = fioInput.value;
    var dateValue = dateInput.value;
    var timeValue = timeInput.value;
    var phoneValue = phoneInput.value;

  
    popupWindow.close();
  });

 
  popupWindow.document.body.appendChild(form);
}


var buttonEnroll = document.querySelector('.button-enroll');
var buttonRight = document.querySelector('.button-right');



buttonEnroll.addEventListener('click', function() {
  openConsultationForm();
});


buttonRight.addEventListener('click', function() {
  openConsultationForm();
});






