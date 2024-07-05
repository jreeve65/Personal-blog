
//read function


const getLocalStorage = function () {
    const dataToStore = JSON.parse(localStorage.getItem("posts"));//read from the data base
    return dataToStore || [];    // returns all the data in database or an empty array.
}
//sets up for theme switch
// let mode = 'dark';
// let body = document.querySelector('.dark_body');
// let elements = document.querySelector('.dark');
// let sun = document.querySelector('#sun_dark');
// let container = document.querySelector('.container');
// let card = document.querySelector('.card');
// let pageHeader = document.querySelector('#dark_pageHeader');
// let themeSwitcher = document.querySelector('#theme-switcher');


//theme switch logic

// handleThemeSwitch = function (event) {
//     // event.preventDefault();
//     if (mode === 'dark') {
//         // for reverting assignments back if light mode has already been selected before.
//         mode = 'light';

//         body = document.querySelector('.dark_body');
//         elements = document.querySelector('.dark');
//         sun = document.querySelector('#sun_dark');
//         container = document.querySelector('.container');
//         card = document.querySelector('.card');
//         pageHeader = document.querySelector('#dark_pageHeader');
        
//         //for setting new classes after removing
//         body.setAttribute('class', 'light_body');
//         elements.setAttribute('class', 'light');
//         sun.setAttribute('id', 'sun_light');
//         card.setAttribute('class', 'card light');
//         pageHeader.setAttribute('id', 'light_pageHeader');
//         container.setAttribute('class', 'container light');
//         // form.setAttribute('class','light');

//     }
//     else {
//         // for setting queries to select the right elements after they have been switched.
//         mode = 'dark';
//         body = document.querySelector('.light_body');
//         elements = document.querySelector('.light');
//         sun = document.querySelector('#sun_light');
//         container = document.querySelector('.container');
//         card = document.querySelector('.card');
//         pageHeader = document.querySelector('#light_pageHeader');

//         body.setAttribute('class', 'dark_body');
//         elements.setAttribute('class', 'dark');
//         sun.setAttribute('id', 'sun_dark');
//         card.setAttribute('class', 'card dark');
//         pageHeader.setAttribute('id', 'dark_pageHeader');
//         container.setAttribute('class', 'container dark');
//         // form.setAttribute('class','dark');
        
//     }


// }
// themeSwitcher.addEventListener('click',handleThemeSwitch);

