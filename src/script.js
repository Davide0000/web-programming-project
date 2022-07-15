//useful html nodes
const grid = document.getElementById('tweet-cards');
const cards = grid.querySelectorAll('.uk-card-body');
const divButtons = document.getElementById('classifier-buttons');
const buttons = divButtons.querySelectorAll('.uk-button');
//disable classifier buttons on load,when nothing is selected
buttons.forEach((button) => button.setAttribute('disabled', true))
//dark mode
if (localStorage.getItem('darkMode') === null) localStorage.setItem('darkMode', 'false');
loadMode();

function loadMode() {
   if (localStorage.getItem('darkMode') === 'true') {
      document.getElementById('darkmode-checkbox').checked = true;
      toggleStyle();

   }
}

function toggleStyle() {
   var element = document.body;
   element.classList.toggle('darkmode');
   cards.forEach((card) => {
      if (!card.classList.contains('uk-card-primary')) card.classList.toggle("uk-card-secondary");
   })

   const divCategories = document.getElementById('categories');
   const selectedCategory = divCategories.querySelector(".uk-button");

   const categories = divCategories.getElementsByTagName("option");


   for (const category of categories) {
      category.classList.toggle("darkmode");
   }

   selectedCategory.classList.toggle("uk-button-secondary");


   buttons.forEach((button) => {
      button.classList.toggle("uk-button-secondary");

   })
}
document.getElementById('darkmode-checkbox').addEventListener('click', () => {
   if (localStorage.getItem('darkMode') === 'false') {
      localStorage.setItem('darkMode', 'true');
   } else {
      localStorage.setItem('darkMode', 'false');
   }
   toggleStyle();
})
//cards event listener

let workCard = document.getElementById('work-card');
cards.forEach((card) => {
   let p = card.getElementsByTagName('p')[0];
   card.addEventListener('click', () => {
      //activate button when selecting a card
      buttons.forEach((button) => button.removeAttribute('disabled'))
      selectedCard = grid.querySelector('.uk-card-primary');
      if (selectedCard) {

         selectedCard.classList.remove('uk-card-primary');
         if (card.classList.contains('uk-card-secondary')) selectedCard.classList.add('uk-card-secondary');
      }
      if (card.classList.contains('uk-card-secondary')) card.classList.remove('uk-card-secondary');
      card.classList.add('uk-card-primary');
      workP = workCard.getElementsByTagName('p')[0];
      workP.innerText = p.innerText;
   })

})
//mode of use

document.getElementById('simple-mode').addEventListener('click', () => {
   document.getElementById('learn').style.display = 'inline';
   document.getElementById('mode-instructions').innerHTML = "Choose one of the six following cards, then decide wether it has a positive neutral or negative meaning and submit it to the classifier so that it will learn it.";
   disabledButton = document.getElementById('classify');
   disabledButton.style.display = 'none';
})

document.getElementById('guided-mode').addEventListener('click', () => {
   document.getElementById('learn').style.display = 'inline';
   document.getElementById('mode-instructions').innerHTML = "The classifier will suggest the meaning of one of the cards, highlighting the percentages of correctness; then it's up to you to decide if it's right or modify if it isn't before submitting the result which will be learnt."
   disabledButton = document.getElementById('classify');
   disabledButton.style.display = 'none';
})

document.getElementById('automatic-mode').addEventListener('click', () => {
   document.getElementById('classify').style.display = 'inline';
   document.getElementById('mode-instructions').innerHTML = "The classifier will automatically classify the six cards, highlighting the percentages of correctness of each one of them."
   disabledButton = document.getElementById('learn');
   disabledButton.style.display = 'none';

})
//charts
const ctx1 = document.getElementById('barChart').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx = document.getElementById('pieChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});