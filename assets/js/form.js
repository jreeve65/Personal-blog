const form = document.querySelector("form");
const userNameInput = document.querySelector("#username");
const blogTitleInput = document.querySelector("#blogtitle");
const contentInput = document.querySelector("#blogcontent");
const handleFormSubmit = function(event){
    event.preventDefault();
    if(userNameInput.value ==""||blogTitleInput ==""||contentInput==""){
        console.log("must have all fields filled out");
        return;
    }
    const newPost = {
        userName: userNameInput.value,
        blogTitle: blogTitleInput.value,
        content:contentInput.value,
    }
    console.log(newPost.userName);
    console.log(newPost.blogTitle);
    console.log(newPost.content);
   
}
form.addEventListener("submit", handleFormSubmit)