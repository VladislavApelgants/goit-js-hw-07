const categoriesListRef = document.querySelector('#categories')
const categoriesListItem = categoriesListRef.querySelectorAll('.item');

let subcategoryByEl;
const showLength = `В списке ${categoriesListItem.length} категории:`
console.log(showLength)

let categoryParams;

const categoriesShow = categoriesListItem.forEach(category => {
    categoryParams = `Категория ${category.querySelector('h2').textContent} - количество элементов ${category.querySelectorAll('li').length} :`

    console.log(categoryParams)
    
    subcategoryByEl = category.querySelectorAll('li').forEach(sub => console.log(sub.textContent))

}
)
