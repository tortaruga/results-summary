const categoryName = document.querySelectorAll('.category-name');
const categoryIcon = document.querySelectorAll('.category-icon');
const categoryScore = document.querySelectorAll('.category-score');

async function fillData() {
    const request = new Request('./data.json'); 
  
    const response = await fetch(request);
    const data = await response.json();
  
    categoryName.forEach((category, i) => {
        category.textContent = data[i].category;
    })
    
    categoryIcon.forEach((category, i) => {
        category.src = data[i].icon;
    })
    
    categoryScore.forEach((category, i) => {
        category.innerHTML = `${data[i].score} <span class="category-span">/ 100</span>`
    })  
}

fillData() ;