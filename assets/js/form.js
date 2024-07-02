const form = document.querySelector("form");
const handleFormSubmit = function(event){
    event.preventDefault();
    console.log("form submitted");
}
form.addEventListener("submit", handleFormSubmit)