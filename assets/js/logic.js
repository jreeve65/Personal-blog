const getLocalStorage = function () {
    const dataToStore = JSON.parse(localStorage.getItem("posts"));//read from the data base
    return dataToStore || [];    // returns all the data in database or an empty array.
}

//Use api ins number 11 Event-listener as a reference for theme switcher logic.

// const themeSwitcher = document.querySelector('#theme-switcher');
// const container = document.querySelector('.container');

// // Set default mode to dark
// let mode = 'dark';

// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener('click', function () {
//   // If mode is dark, apply light background
//   if (mode === 'dark') {
//     mode = 'light';
//     container.setAttribute('class', 'light');
//   }
//   // If mode is light, apply dark background
//   else {
//     mode = 'dark';
//     container.setAttribute('class', 'dark');
//   }
// });