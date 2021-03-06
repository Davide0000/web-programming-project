export const grid = document.getElementById('tweet-cards');
export const cards = grid.querySelectorAll('.uk-card-body');
export const divButtons = document.getElementById('classifier-buttons');
export const buttons = divButtons.querySelectorAll('.uk-button');
export const workCard = document.getElementById('work-card');
export const divCategories = document.getElementById('categories');
export const selectCategory = divCategories.getElementsByTagName('select')[0];
export const selectedCategoryButton = divCategories.querySelector(".uk-button");
export const categories = divCategories.getElementsByTagName("option");
export const classifyButton = document.getElementById('classify');
export const learnButton = document.getElementById('learn');
export const newTweetsButton = document.getElementById('newTweets');
export const progressBar = document.getElementById('progress-bar');