var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function(){
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250)
}

document.addEventListener('DOMContentLoaded', function () {
  const addSkillForm = document.getElementById('addSkillForm');
  const newSkillInput = document.getElementById('newSkill');
  const authorInput = document.getElementById('authorInput');
  const skillsList = document.getElementById('skillsList');

  if (addSkillForm && newSkillInput && authorInput && skillsList) {
    addSkillForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const newSkill = newSkillInput.value;
      const author = authorInput.value;

      if (newSkill.trim() !== '' && author.trim() !== '') {
        const newSkillItem = document.createElement('div');
        
        // Создаем элемент p для отображения текста с классом
        const skillDetails = document.createElement('p');
        skillDetails.textContent = `Комментарий: ${newSkill}, Автор: ${author}`;
        skillDetails.classList.add('skill-item'); // добавляем класс для стилизации

        // Добавляем элемент p к новому навыку
        newSkillItem.appendChild(skillDetails);

        // Добавляем новый навык к skillsList
        skillsList.appendChild(newSkillItem);

        // Очищаем поля ввода
        newSkillInput.value = '';
        authorInput.value = '';

        // Выводим информацию в консоль для отладки
        console.log('Навык и автор добавлены успешно.');
      } else {
        // Если поля пустые, выводим информацию в консоль
        console.log('Поля не должны быть пустыми.');
      }
    });
  } else {
    // Если не удается найти элементы, выводим информацию в консоль
    console.log('Не удается найти все необходимые элементы.');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const themeSwitch = document.querySelector('.theme-switch__checkbox');
  const body = document.body;

  themeSwitch.addEventListener('change', function () {
      if (themeSwitch.checked) {
          body.classList.add('dark-theme');
      } else {
          body.classList.remove('dark-theme');
      }
  });

  // Вызываем событие изменения темы при загрузке страницы
  themeSwitch.dispatchEvent(new Event('change'));
});