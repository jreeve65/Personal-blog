const getLocalStorage = function () {
    const dataToStore = JSON.parse(localStorage.getItem("posts"));//read from the data base
    return dataToStore || [];    // returns all the data in database or an empty array.
}

//Use api ins number 11 Event-listener as a reference for theme switcher logic.