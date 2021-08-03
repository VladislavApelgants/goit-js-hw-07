const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const additemList = ingredients.forEach(elem => {
  const item = document.createElement('li')
  item.textContent = elem;

  return document.querySelector('#ingredients').appendChild(item);
})


